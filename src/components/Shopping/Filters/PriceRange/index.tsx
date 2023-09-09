import {
    type Control,
    Controller,
    type FieldValues,
    type Path,
    useFieldArray,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Range } from 'components/Range';
import { Heading } from '../Heading';

interface Properties<C extends FieldValues> {
    readonly name: Path<C>;
    readonly control: Control<C>;
    readonly title: string;
}

export const PriceRange = <C extends FieldValues>({
    title,
    control,
    name,
}: Properties<C>) => {
    const { t } = useTranslation();

    const { replace } = useFieldArray<C>({
        control,
        name,
    });

    const onChange = (values?: number[]) => {
        replace(values?.map(value => ({ value })));
    };

    return (
        <Controller
            name={name}
            control={control}
            render={() => (
                <>
                    <Heading title={t(title)} />
                    <div className="p-4">
                        <Range
                            defaultValue={[0, 100]}
                            onValueCommit={onChange}
                        />
                    </div>
                </>
            )}
        />
    );
};
