import {
    type ArrayPath,
    type Control,
    Controller,
    type FieldArray,
    type FieldValues,
    useFieldArray,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Toggle } from 'components/interactive/Toggle';
import type { Variant } from 'shared/types';
import { VARIANT_COLORS } from 'shared/variant-colors.ts';
import Heading from '../Heading';

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

    const onChange = (state: boolean, value: string) => {
        return state
            ? append({ value } as FieldArray<C>)
            : replace(fields.filter(field => field?.value !== value));
    };

    return (
        <Controller
            name={name}
            control={control}
            render={() => (
                <>
                    <Heading title={t(title)} />
                    <ul className="px-4 grid lg:grid-cols-3 xl:grid-cols-4 gap-2">
                        {variants?.map(({ title, value }) => (
                            <li
                                className="flex items-center justify-center py-1 font-light"
                                key={value}
                            >
                                <Toggle
                                    id={value}
                                    className="relative flex items-center justify-center"
                                    onPressedChange={state =>
                                        onChange(state, value)
                                    }
                                >
                                    {asColorList && (
                                        <span
                                            className={twMerge(
                                                'mr-2 w-4 h-4 rounded-full',
                                                VARIANT_COLORS[value],
                                            )}
                                        ></span>
                                    )}
                                    <span>{title}</span>
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
