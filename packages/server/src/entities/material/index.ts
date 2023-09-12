import type { Material } from 'generated';

export const MATERIAL = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const materials: Material[] = [
    MATERIAL('synthetic', 'synthetic'),
    MATERIAL('wool', 'wool'),
    MATERIAL('linen', 'linen'),
    MATERIAL('denim', 'denim'),
    MATERIAL('leather', 'leather'),
    MATERIAL('silk', 'silk'),
    MATERIAL('chiffon', 'chiffon'),
    MATERIAL('other', 'other'),
];
