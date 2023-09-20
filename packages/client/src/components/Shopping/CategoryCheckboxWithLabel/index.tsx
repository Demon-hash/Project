import type { CheckedState } from '@radix-ui/react-checkbox';
import { type FC, useId } from 'react';
import Checkbox from 'components/interactive/Checkbox';
import type { Variant } from 'shared/types';

interface Properties {
    category?: Variant | null;
    onChange: (state: CheckedState) => void;
}
const CategoryCheckboxWithLabel: FC<Properties> = ({ category, onChange }) => {
    const id = useId();

    return (
        <>
            <Checkbox id={id} onCheckedChange={onChange} />
            <label
                htmlFor={id}
                className="text-accent-foreground leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {category?.title}
            </label>
        </>
    );
};

export default CategoryCheckboxWithLabel;
