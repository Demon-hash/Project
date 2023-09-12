import type { Product } from 'generated';
import { brands } from '../brand';
import { categories } from '../category';
import { colors } from '../color';
import { materials } from '../material';
import { sizes } from '../size';
import { types } from '../type';

export const products: Product[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
].map(id => ({
    id,
    title: {
        en: 'Sweater',
        ru: 'Свитер',
    },
    imageUrl:
        'https://www.pngall.com/wp-content/uploads/12/Jumper-PNG-Image-HD.png',
    price: Math.floor(Math.random() * 1000),
    stock: Math.floor(Math.random() * 10),
    color: [
        colors[Math.floor(Math.random() * colors.length)],
        colors[Math.floor(Math.random() * colors.length)],
    ],
    size: [
        sizes[Math.floor(Math.random() * sizes.length)],
        sizes[Math.floor(Math.random() * sizes.length)],
        sizes[Math.floor(Math.random() * sizes.length)],
    ],
    material: [materials[Math.floor(Math.random() * materials.length)]],
    category: [categories[Math.floor(Math.random() * categories.length)]],
    type: [
        types[Math.floor(Math.random() * types.length)],
        types[Math.floor(Math.random() * types.length)],
    ],
    brand: [brands[Math.floor(Math.random() * brands.length)]],
}));
