import type { CheckedState } from '@radix-ui/react-checkbox';
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
import type { Variant } from 'shared/types';
import CategoryCheckboxWithLabel from '../CategoryCheckboxWithLabel';
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
    readonly categories?: (Variant | null)[] | null;
}

const SubcategoriesList = <C extends FieldValues>({
    name,
    control,
    title,
    categories,
}: Properties<C>) => {
    const { t } = useTranslation();
    const { fields, append, replace } = useFieldArray<C>({
        control,
        name,
    });

    const onChange = (state: CheckedState, value?: string | null) => {
        if (typeof state === 'string' || typeof value !== 'string') {
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
                    <ul className="px-4">
                        {categories?.map(category => (
                            <li
                                key={category?.value}
                                className="flex items-center py-1 space-x-4 font-light"
                            >
                                <CategoryCheckboxWithLabel
                                    category={category}
                                    onChange={state =>
                                        onChange(state, category?.value)
                                    }
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        />
    );
};

export default SubcategoriesList;
