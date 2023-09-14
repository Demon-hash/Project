export const TYPE = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const types: ReturnType<typeof TYPE>[] = [
    TYPE('Women', 'women'),
    TYPE('Men', 'men'),
    TYPE('Children', 'children'),
    TYPE('Unisex', 'unisex'),
    TYPE('Onesize', 'onesize'),
    TYPE('Other', 'other'),
];
