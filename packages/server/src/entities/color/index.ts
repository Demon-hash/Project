export const COLOR = (en: string, ru: string, value: string) => ({
    title: {
        en,
        ru,
    },
    value,
});

export const colors: ReturnType<typeof COLOR>[] = [
    COLOR('Red', 'Красный', 'red'),
    COLOR('Orange', 'Ораньжевый', 'orange'),
    COLOR('Yellow', 'Желтый', 'yellow'),
    COLOR('Green', 'Зелёный', 'green'),
    COLOR('Sky', 'Голубой', 'sky'),
    COLOR('Blue', 'Синий', 'blue'),
    COLOR('Violet', 'Лиловый', 'violet'),
    COLOR('Purple', 'Фиолетовый', 'purple'),
    COLOR('Pink', 'Розовый', 'pink'),
    COLOR('White', 'Белый', 'white'),
    COLOR('Gray', 'Серый', 'gray'),
    COLOR('Black', 'Чёрный', 'black'),
];
