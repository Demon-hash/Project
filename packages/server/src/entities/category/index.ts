export const CATEGORY = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const categories: ReturnType<typeof CATEGORY>[] = [
    CATEGORY('Shirts', 'shirts'),
    CATEGORY('Sunglasses', 'sunglasses'),
    CATEGORY('Sneakers', 'sneakers'),
    CATEGORY('Jackets', 'jackets'),
    CATEGORY('Boots', 'boots'),
    CATEGORY('Watches', 'watches'),
    CATEGORY('Earrings', 'earrings'),
    CATEGORY('Scarfs', 'scarfs'),
];
