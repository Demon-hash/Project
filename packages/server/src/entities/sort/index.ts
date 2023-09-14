export const SORT = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const sorts: ReturnType<typeof SORT>[] = [
    SORT('Popularity', 'popularity'),
    SORT('Rating', 'rating'),
    SORT('Newness', 'newness'),
    SORT('Price', 'price'),
];
