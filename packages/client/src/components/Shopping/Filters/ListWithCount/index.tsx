import type { CheckedState } from '@radix-ui/react-checkbox';
import {
    type Control,
    Controller,
    type FieldArray,
    type FieldValues,
    type Path,
    useFieldArray,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Checkbox } from 'components/Checkbox';
import type { Variant } from 'shared/types';
import { Heading } from '../Heading';

interface Properties<C extends FieldValues> {
    readonly name: Path<C>;
    readonly control: Control<C>;
    readonly title: string;
    readonly variants?: Variant[];
}

export const ListWithCount = <C extends FieldValues>({
    name,
    control,
    title,
    variants,
}: Properties<C>) => {
    const { t } = useTranslation();

    const { fields, append, replace } = useFieldArray<C>({
        control,
        name,
    });

    const onChange = (state: CheckedState, value: string) => {
        if (typeof state === 'string') {
            return;
        }

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
                    <ul className="px-4">
                        {variants?.map(({ title, value }) => (
                            <li
                                className="flex items-center py-1 space-x-4 font-light"
                                key={value}
                            >
                                <Checkbox
                                    id={value}
                                    onCheckedChange={state =>
                                        onChange(state, value)
                                    }
                                />
                                <label
                                    htmlFor={value}
                                    className="text-accent-foreground leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {title}
                                </label>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        />
    );
};
