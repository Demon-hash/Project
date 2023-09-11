import type { Type } from '../../generated/graphql';

export const TYPE = (en: string, value: string) => ({
    title: {
        en,
    },
    value
});

export const types: Type[] = [
    TYPE('boots', 'boots'),
    TYPE('shirt', 'shirt'),
    TYPE('sweater', 'sweater'),
    TYPE('jacket', 'jacket'),
    TYPE('swimsuit', 'swimsuit'),
    TYPE('glasses', 'glasses'),
];
