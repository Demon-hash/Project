import type { FC, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Skeleton: FC = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={twMerge('animate-pulse rounded-sm bg-muted', className)}
            {...props}
        />
    );
};
