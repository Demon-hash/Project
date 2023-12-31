export const SIZE = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const sizes: ReturnType<typeof SIZE>[] = [
    SIZE('XS', 'xs'),
    SIZE('S', 's'),
    SIZE('M', 'm'),
    SIZE('L', 'l'),
    SIZE('XL', 'xl'),
    SIZE('XXL', 'xxl'),
];
