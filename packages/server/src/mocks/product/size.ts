import type { Size } from '../../generated/graphql';

export const SIZE = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const sizes: Size[] = [
    SIZE('xs', 'xs'),
    SIZE('s', 's'),
    SIZE('m', 'm'),
    SIZE('l', 'l'),
    SIZE('xl', 'xl'),
    SIZE('xxl', 'xxl'),
];
