import type { Product } from 'generated';
import { type BRAND, brands } from '../brand';
import { type CATEGORY, categories } from '../category';
import { type COLOR, colors } from '../color';
import { type MATERIAL, materials } from '../material';
import { type SIZE, sizes } from '../size';
import { type TYPE, types } from '../type';

const generateString = (length: number) => {
    const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = chars.length;
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

const mockProductData = {
    shirts: {
        en: 'Shirt',
        den: 'A shirt is a garment that is worn over the upper body, covering the torso and arms',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/12/Jumper-PNG-Image-HD.png',
        color: colors.filter(color => color.value === 'white'),
    },
    sunglasses: {
        en: 'Sunglasses',
        den: 'Sunglasses are a popular accessory worn to protect the eyes from harmful rays of the sun',
        imageUrl: 'https://pngimg.com/uploads/sunglasses/sunglasses_PNG15.png',
        color: colors.filter(color => ['white', 'sky'].includes(color.value)),
    },
    sneakers: {
        en: 'Running Sneakers',
        den: 'Sport sneakers are a type of shoe designed for physical activities such as running, jogging, and working out',
        imageUrl: 'https://pngimg.com/d/running_shoes_PNG5824.png',
        color: colors.filter(color =>
            ['white', 'blue', 'green', 'sky'].includes(color.value),
        ),
    },
    jackets: {
        en: 'Jacket',
        den: 'Jackets are commonly used for protection against cold, wind, rain, or snow, but can also serve as a fashion statement',
        imageUrl: 'https://pngimg.com/uploads/jacket/jacket_PNG8035.png',
        color: colors.filter(color => ['black', 'red'].includes(color.value)),
    },
    scarfs: {
        en: 'Scarf',
        den: 'A scarf is a long, narrow piece of fabric that is worn around the neck, head, or waist for warmth or to add a fashionable touch to an outfit',
        imageUrl: 'https://pngimg.com/d/scarf_PNG43.png',
        color: colors.filter(color => color.value === 'white'),
    },
    watches: {
        en: 'Modern Watches',
        den: 'Watches are timepieces that can be worn on the wrist or carried in a pocket',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/2016/04/Watch-Free-Download-PNG.png',
        color: colors.filter(color => ['white', 'black'].includes(color.value)),
    },
    boots: {
        en: 'Boots',
        den: 'Boots are a type of footwear that cover the foot and ankle. Boots can be worn for fashion, work, outdoor activities, or protection',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/7/Leather-Boot-PNG-Photo.png',
        color: colors.filter(color => ['orange'].includes(color.value)),
    },
    earrings: {
        en: 'Earrings',
        den: 'Female earrings come in a variety of shapes, styles, and materials. From simple studs to elaborate dangling designs, there is an earring to suit every taste and occasion',
        imageUrl:
            'https://www.pngall.com/wp-content/uploads/8/Earring-Transparent.png',
        color: colors.filter(color => ['white', 'blue'].includes(color.value)),
    },
};

interface Locale {
    en: string;
    ru: string;
}

export const PRODUCT = (
    imageUrl: string,
    price: number,
    stock: number,
    title: Locale,
    description: Locale,
    color: ReturnType<typeof COLOR>[],
    brand: ReturnType<typeof BRAND>[],
    category: ReturnType<typeof CATEGORY>[],
    material: ReturnType<typeof MATERIAL>[],
    size: ReturnType<typeof SIZE>[],
    type: ReturnType<typeof TYPE>[],
): Record<keyof Omit<Product, '__typename'>, any> => {
    const id = new Date().getTime().toString();

    return {
        id,
        title,
        description,
        imageUrl,
        brand,
        category,
        color,
        material,
        price,
        size,
        stock,
        type,
    };
};

export const products: ReturnType<typeof PRODUCT>[] = new Array(20)
    .fill(0)
    .map(() => {
        const categoryIndex = Math.floor(Math.random() * categories.length);

        // @ts-ignore
        const { en, den, imageUrl, color } =
            mockProductData[categories[categoryIndex].value];

        return {
            id: generateString(12),
            title: {
                en,
            },
            description: {
                en: den,
            },
            imageUrl,
            price: Math.floor(Math.random() * 1000),
            stock: Math.floor(Math.random() * 10),
            color,
            size: Array.from(
                new Set([
                    sizes[Math.floor(Math.random() * sizes.length)],
                    sizes[Math.floor(Math.random() * sizes.length)],
                    sizes[Math.floor(Math.random() * sizes.length)],
                ]),
            ),
            material: Array.from(
                new Set([
                    materials[Math.floor(Math.random() * materials.length)],
                ]),
            ),
            category: Array.from(new Set([categories[categoryIndex]])),
            type: Array.from(
                new Set([
                    types[Math.floor(Math.random() * types.length)],
                    types[Math.floor(Math.random() * types.length)],
                ]),
            ),
            brand: Array.from(
                new Set([brands[Math.floor(Math.random() * brands.length)]]),
            ),
        };
    });

export const productsById = products.reduce(
    (acc, { id, ...rest }) => {
        return {
            ...acc,
            [id]: {
                id,
                ...rest,
            },
        };
    },
    {} as Record<string, Product>,
);
