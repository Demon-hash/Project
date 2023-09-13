import type { Category } from 'generated';

export const CATEGORY = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const categories: Category[] = [
    CATEGORY('Shirts', 'shirts'),
    CATEGORY('Sunglasses', 'sunglasses'),
    CATEGORY('Sneakers', 'sneakers'),
    CATEGORY('Jackets', 'jackets'),
    CATEGORY('Boots', 'boots'),
    CATEGORY('Watches', 'watches'),
    CATEGORY('Earrings', 'earrings'),
    CATEGORY('Scarfs', 'scarfs'),
];
