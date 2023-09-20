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
import CategoryCheckboxWithLabel from 'components/shopping/CategoryCheckboxWithLabel';
import type { Variant } from 'shared/types';
import Heading from '../Heading';

interface Properties<C extends FieldValues> {
    readonly name: Path<C>;
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
