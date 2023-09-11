import type { Color } from '../../generated/graphql';

export const COLOR = (en: string, value: string) => ({
    title: {
        en,
    },
    value,
});

export const colors: Color[] = [
    COLOR('Red', 'red'),
    COLOR('Orange', 'orange'),
    COLOR('Yellow', 'yellow'),
    COLOR('Green', 'green'),
    COLOR('Sky', 'sky'),
    COLOR('Blue', 'blue'),
    COLOR('Violet', 'violet'),
    COLOR('Purple', 'purple'),
    COLOR('Pink', 'pink'),
    COLOR('White', 'white'),
    COLOR('Gray', 'gray'),
    COLOR('Black', 'black'),
];
