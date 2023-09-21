import type { FC } from 'react';
import type { Size } from 'generated';

interface Properties {
    readonly sizes?: (Size | null)[] | null;
}

const SizesList: FC<Properties> = ({ sizes }) => {
    return (
        <div className="flex items-center my-4 space-x-2">
            {sizes?.map(size => (
                <div
                    key={size?.value}
                    className="border border-border px-2 rounded-sm"
                >
                    {size?.title}
                </div>
            ))}
        </div>
    );
};

export default SizesList;
