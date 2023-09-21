import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { Color } from 'generated';
import { VARIANT_COLORS } from 'shared/variant-colors.ts';

interface Properties {
    readonly colors?: (Color | null)[] | null;
    readonly centred?: boolean;
}

const ColorsList: FC<Properties> = ({ colors, centred }) => {
    return (
        <div
            className={twMerge(
                'flex items-center my-4 space-x-2',
                centred && 'justify-center',
            )}
        >
            {colors?.map(color => (
                <div
                    key={color?.value}
                    className={twMerge(
                        VARIANT_COLORS?.[
                            color?.value as keyof typeof VARIANT_COLORS
                        ],
                        'h-4 w-4 rounded-full',
                    )}
                ></div>
            ))}
        </div>
    );
};

export default ColorsList;
