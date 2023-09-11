import type { Type } from '../../generated/graphql';

export const TYPE = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const types: Type[] = [
    TYPE('women', 'women'),
    TYPE('men', 'men'),
    TYPE('children', 'children'),
    TYPE('unisex', 'unisex'),
    TYPE('onesize', 'onesize'),
    TYPE('other', 'other'),
];
