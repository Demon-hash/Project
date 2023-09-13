import type { Type } from 'generated';

export const TYPE = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const types: Type[] = [
    TYPE('Women', 'women'),
    TYPE('Men', 'men'),
    TYPE('Children', 'children'),
    TYPE('Unisex', 'unisex'),
    TYPE('Onesize', 'onesize'),
    TYPE('Other', 'other'),
];
