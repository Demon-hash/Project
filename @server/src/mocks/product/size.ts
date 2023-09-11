import type { Size } from '../../generated/graphql';

export const SIZE = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const sizes: Size[] = [
    SIZE('xs', '20'),
    SIZE('s', '21-25'),
    SIZE('m', '26-30'),
    SIZE('l', '31-40'),
    SIZE('xl', '41-50'),
    SIZE('xxl', '50-64'),
];
