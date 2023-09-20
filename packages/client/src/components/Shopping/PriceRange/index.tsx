import {
    type ArrayPath,
    type Control,
    Controller,
    type FieldArray,
    type FieldValues,
    type Path,
    useFieldArray,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Range from 'components/interactive/Range';
import Heading from '../Heading';

type Normalized<T extends FieldValues> =
    | FieldArray<T, ArrayPath<T>>
    | FieldArray<T, ArrayPath<T>>[];

interface Properties<C extends FieldValues> {
    readonly name: ArrayPath<C>;
    readonly control: Control<C>;
    readonly title: string;
}

const PriceRange = <C extends FieldValues>({
    title,
    control,
    name,
}: Properties<C>) => {
    const { t } = useTranslation();

    const { replace } = useFieldArray<C>({
        control,
        name,
    });

    const onChange = (range?: number | number[]) => {
        if (range === undefined) {
            return;
        }

        if (Array.isArray(range)) {
            const values = range?.map(value => ({ value }));
            return replace((values ?? []) as Normalized<C>);
        }

        replace([{ value: range }] as Normalized<C>);
    };

    return (
        <Controller
            name={name as Path<C>}
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

export default PriceRange;
