import type { Sort } from 'generated';

export const SORT = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const sorts: Sort[] = [
    SORT('Popularity', 'popularity'),
    SORT('Rating', 'rating'),
    SORT('Newness', 'newness'),
    SORT('Price', 'price'),
];
