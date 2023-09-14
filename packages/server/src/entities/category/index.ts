export const CATEGORY = (
    en: string,
    ru: string,
    value: string,
    imageUrl: string,
) => ({
    title: {
        en,
        ru,
    },
    value,
    imageUrl,
});

export const categories: ReturnType<typeof CATEGORY>[] = [
    CATEGORY(
        'Jackets',
        'Куртки',
        'jackets',
        'https://pngimg.com/uploads/jacket/jacket_PNG8035.png',
    ),
    CATEGORY(
        'Sunglasses',
        'Солнцезащитные очки',
        'sunglasses',
        'https://pngimg.com/uploads/sunglasses/sunglasses_PNG15.png',
    ),
    CATEGORY(
        'Sneakers',
        'Кроссовки',
        'sneakers',
        'https://pngimg.com/d/running_shoes_PNG5824.png',
    ),
    CATEGORY(
        'Shirts',
        'Рубашки',
        'shirts',
        'https://pngimg.com/uploads/jacket/jacket_PNG8035.png',
    ),
    CATEGORY('Boots', 'Ботинки', 'boots', ''),
    CATEGORY('Watches', 'Часы', 'watches', ''),
    CATEGORY('Earrings', 'Серьги', 'earrings', ''),
    CATEGORY('Scarfs', 'Шарфы', 'scarfs', ''),
];
