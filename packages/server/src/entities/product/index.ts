import type { Product } from 'generated';
import { brands } from '../brand';
import { categories } from '../category';
import { COLOR } from '../color';
import { materials } from '../material';
import { sizes } from '../size';
import { types } from '../type';

const mockProductData = {
    shirts: {
        en: 'White Shirt',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/12/Jumper-PNG-Image-HD.png',
        color: [COLOR('White', 'white')],
    },
    sunglasses: {
        en: 'Red Sunglasses',
        imageUrl:
            'https://www.freepnglogos.com/uploads/goggles-png/red-goggles-sunglasses-png-transparent-images-23.png',
        color: [COLOR('Black', 'black'), COLOR('Red', 'red')],
    },
    sneakers: {
        en: 'Running Sneakers',
        imageUrl: 'https://pngimg.com/d/running_shoes_PNG5824.png',
        color: [
            COLOR('White', 'white'),
            COLOR('Blue', 'blue'),
            COLOR('Sky', 'sky'),
            COLOR('Green', 'green'),
        ],
    },
    jackets: {
        en: 'Red Jacket',
        imageUrl: 'https://pngimg.com/d/jacket_PNG8058.png',
        color: [COLOR('Black', 'black'), COLOR('Red', 'red')],
    },
    scarfs: {
        en: 'White Scarf',
        imageUrl: 'https://pngimg.com/d/scarf_PNG43.png',
        color: [COLOR('White', 'white')],
    },
    watches: {
        en: 'Modern Watches',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/2016/04/Watch-Free-Download-PNG.png',
        color: [COLOR('White', 'white'), COLOR('Black', 'black')],
    },
    boots: {
        en: 'Orange Boots',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/7/Leather-Boot-PNG-Photo.png',
        color: [COLOR('Orange', 'orange')],
    },
    earrings: {
        en: 'White Earrings',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/8/Earring-Transparent.png',
        color: [COLOR('White', 'white'), COLOR('Blue', 'blue')],
    },
};

export const products: Product[] = new Array(20).fill(0).map((_, id) => {
    const categoryIndex = Math.floor(Math.random() * categories.length);

    // @ts-ignore
    const { en, imageUrl, color } =
        mockProductData[categories[categoryIndex].value];

    return {
        id: `${id}`,
        title: {
            en,
        },
        imageUrl,
        price: Math.floor(Math.random() * 1000),
        stock: Math.floor(Math.random() * 10),
        color,
        size: [
            sizes[Math.floor(Math.random() * sizes.length)],
            sizes[Math.floor(Math.random() * sizes.length)],
            sizes[Math.floor(Math.random() * sizes.length)],
        ],
        material: [materials[Math.floor(Math.random() * materials.length)]],
        category: [categories[categoryIndex]],
        type: [
            types[Math.floor(Math.random() * types.length)],
            types[Math.floor(Math.random() * types.length)],
        ],
        brand: [brands[Math.floor(Math.random() * brands.length)]],
    };
});
