import type { Category } from 'generated';

export const CATEGORY = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const categories: Category[] = [
    CATEGORY('boots', 'boots'),
    CATEGORY('shirt', 'shirt'),
    CATEGORY('sweater', 'sweater'),
    CATEGORY('jacket', 'jacket'),
    CATEGORY('swimsuit', 'swimsuit'),
    CATEGORY('glasses', 'glasses'),
];
