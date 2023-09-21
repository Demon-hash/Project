import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { LINKS, PARAMS } from 'links';
import { twMerge } from 'tailwind-merge';
import type { Category as Generated } from 'generated';

interface Properties {
    readonly category?: Generated | null;
    readonly largeImage?: boolean;
}

const Category: FC<Properties> = ({ category, largeImage }) => {
    const { title, imageUrl, value } = category ?? {};
    const navigate = useNavigate();
    const link = LINKS.CATEGORIES.replace(PARAMS.categories, value ?? '');

    return (
        <div className="cursor-pointer" onClick={() => navigate(link)}>
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
        </div>
    );
};

export default Category;
