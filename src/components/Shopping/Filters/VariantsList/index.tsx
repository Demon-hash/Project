import {
    type Control,
    Controller,
    type FieldArray,
    type FieldValues,
    type Path,
    useFieldArray,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { twMerge } from 'tailwind-merge';
import { Toggle } from 'components/Toggle';
import { VARIANT_COLORS } from 'shared/variant-colors';
import { Heading } from '../Heading';

interface Properties<C extends FieldValues> {
    readonly name: Path<C>;
    readonly control: Control<C>;
    readonly i18key: string;
    readonly title: string;
    readonly variants: string[];
    readonly asColorList?: boolean;
}

export const VariantsList = <C extends FieldValues>({
    title,
    i18key,
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
                        {variants.map(variant => (
                            <li
                                className="flex items-center justify-center py-1 font-light"
                                key={variant}
                            >
                                <Toggle
                                    id={variant}
                                    className="relative flex items-center justify-center"
                                    onPressedChange={state =>
                                        onChange(state, variant)
                                    }
                                >
                                    {asColorList && (
                                        <span
                                            className={twMerge(
                                                'mr-2 w-4 h-4 rounded',
                                                VARIANT_COLORS[variant],
                                            )}
                                        ></span>
                                    )}
                                    <span>{t(`${i18key}.${variant}`)}</span>
                                </Toggle>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        />
    );
};
