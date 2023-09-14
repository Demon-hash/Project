export const MATERIAL = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const materials: ReturnType<typeof MATERIAL>[] = [
    MATERIAL('Synthetic', 'synthetic'),
    MATERIAL('Wool', 'wool'),
    MATERIAL('Linen', 'linen'),
    MATERIAL('Denim', 'denim'),
    MATERIAL('Leather', 'leather'),
    MATERIAL('Silk', 'silk'),
    MATERIAL('Chiffon', 'chiffon'),
    MATERIAL('Other', 'other'),
];
