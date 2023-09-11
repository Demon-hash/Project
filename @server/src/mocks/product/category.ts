import type { Category } from '../../generated/graphql';

export const CATEGORY = (en: string, value: string) => ({
    title: {
        en,
    },
    value
});

export const categories: Category[] = [
    CATEGORY('women', 'women'),
    CATEGORY('men', 'men'),
    CATEGORY('children', 'children'),
    CATEGORY('unisex', 'unisex'),
    CATEGORY('onesize', 'onesize'),
    CATEGORY('other', 'other'),
];
