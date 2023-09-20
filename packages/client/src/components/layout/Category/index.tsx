import type { FC } from 'react';
import { Link } from 'react-router-dom';
import PATHS from 'paths';
import { twMerge } from 'tailwind-merge';
import type { Category as Generated } from 'generated';

interface Properties {
    readonly category?: Generated | null;
    readonly largeImage?: boolean;
}

const Category: FC<Properties> = ({ category, largeImage }) => {
    const { title, imageUrl } = category ?? {};
    return (
        <Link
            to={PATHS.CATEGORIES.replace(
                /:category/,
                title?.toLowerCase() ?? '',
            )}
        >
            <img
                src={imageUrl ?? ''}
                alt={title ?? ''}
                loading="lazy"
                className={twMerge(
                    'm-auto',
                    largeImage
                        ? 'max-h-[calc(theme(height.64)*2)]'
                        : 'max-h-64',
                )}
            />
            <span className="absolute bg-white text-foreground top-2 left-2 lg:top-4 lg:left-4 rounded-sm px-3 py-2">
                {title}
            </span>
        </Link>
    );
};

export default Category;
