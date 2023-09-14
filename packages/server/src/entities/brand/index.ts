export const BRAND = (en: string, ru: string, value: string) => ({
    title: {
        en,
        ru,
    },
    value,
});

export const brands: ReturnType<typeof BRAND>[] = [
    BRAND('Gucci', 'Гучи', 'gucci'),
    BRAND('Louis Vuitton', 'Луис Витон', 'louis-vuitton'),
    BRAND('Dior', 'Диор', 'dior'),
    BRAND('Prada', 'Прада', 'prada'),
    BRAND('Balenciaga', 'Баланциага', 'balenciaga'),
    BRAND('Moncler', 'Монклеар', 'moncler'),
    BRAND('Saint Laurent', 'Сейнт Лаурент', 'saint-laurent'),
    BRAND('Armani', 'Армани', 'armani'),
    BRAND('Versace', 'Версаж', 'versace'),
    BRAND('Burberry', 'Бурберри', 'burberry'),
];
