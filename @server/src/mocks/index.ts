import type { Product } from '../generated/graphql';
import { materials } from './product/material';
import { sizes } from './product/size';
import { categories } from './product/category';
import { types } from './product/type';
import { brands } from './product/brand';
import { colors } from './product/color';

export const products: Product[] = [
    {
        id: '1',
        title: {
            en: 'Sweater',
            ru: 'Свитер',
        },
        imageUrl: 'https://www.pngall.com/wp-content/uploads/12/Jumper-PNG-Image-HD.png',
        price: 150,
        stock: 10,
        color: [colors[0]],
        size: [sizes[0]],
        material: [materials[0]],
        category: [categories[0]],
        type: [types[0]],
        brand: [brands[0]],
    },
];
