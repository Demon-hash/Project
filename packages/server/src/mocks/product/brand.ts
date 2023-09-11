import type { Brand } from '../../generated/graphql';

export const BRAND = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const brands: Brand[] = [
    BRAND('Gucci', 'gucci'),
    BRAND('Dior', 'dior'),
    BRAND('Prada', 'prada'),
];
