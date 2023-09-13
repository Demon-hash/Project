import type { Brand } from 'generated';

export const BRAND = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const brands: Brand[] = [
    BRAND('Gucci', 'gucci'),
    BRAND('Louis Vuitton', 'louis-vuitton'),
    BRAND('Dior', 'dior'),
    BRAND('Prada', 'prada'),
    BRAND('Balenciaga', 'balenciaga'),
    BRAND('Moncler', 'moncler'),
    BRAND('Saint Laurent', 'saint-laurent'),
    BRAND('Armani', 'armani'),
    BRAND('Versace', 'versace'),
    BRAND('Burberry', 'burberry'),
];
