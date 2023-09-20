import {
    type ArrayPath,
    type Control,
    Controller,
    type FieldArray,
    type FieldArrayWithId,
    type FieldValues,
    type Path,
    useFieldArray,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Toggle } from 'components/interactive/Toggle';
import type { Variant } from 'shared/types';
import { VARIANT_COLORS } from 'shared/variant-colors.ts';
import Heading from '../Heading';

type ExtendedFields<T extends FieldValues> = FieldArrayWithId<T, ArrayPath<T>> &
    { value?: string }[];

type Normalized<T extends FieldValues> =
    | FieldArray<T, ArrayPath<T>>
    | FieldArray<T, ArrayPath<T>>[];

interface Properties<C extends FieldValues> {
    readonly name: ArrayPath<C>;
    readonly control: Control<C>;
    readonly title: string;
    readonly variants?: (Variant | null)[] | null;
    readonly asColorList?: boolean;
}

const VariantsList = <C extends FieldValues>({
    title,
    variants,
    asColorList,
    name,
    control,
}: Properties<C>) => {
    const { t } = useTranslation();

    const { fields, append, replace } = useFieldArray<C>({
        control,
        name,
    });

    const onChange = (state: boolean, value?: string | null) => {
        if (typeof value !== 'string') {
            return;
        }

        const cached = (fields as ExtendedFields<C>).filter(
            field => field?.value !== value,
        );

        return state
            ? append({ value } as FieldArray<C>)
            : replace(cached as Normalized<C>);
    };

    return (
        <Controller
            name={name as Path<C>}
            control={control}
            render={() => (
                <>
                    <Heading title={t(title)} />
                    <ul className="px-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        {variants?.map(variant => (
                            <li
                                className="flex items-center justify-center py-1 font-light"
                                key={variant?.value}
                            >
                                <Toggle
                                    className="relative flex items-center justify-center"
                                    onPressedChange={state =>
                                        onChange(state, variant?.value)
                                    }
                                >
                                    {asColorList && (
                                        <span
                                            className={twMerge(
                                                'mr-2 w-4 h-4 rounded-full',
                                                VARIANT_COLORS?.[
                                                    variant?.value as keyof typeof VARIANT_COLORS
                                                ],
                                            )}
                                        ></span>
                                    )}
                                    <span>{variant?.title}</span>
                                </Toggle>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        />
    );
};

export default VariantsList;
