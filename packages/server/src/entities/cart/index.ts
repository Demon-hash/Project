import type { Product } from 'generated';
import { products } from '../product';

interface Items {
    readonly product: Product;
    readonly count: number;
}

export const CART = (id: string, items: Items[]) => ({
    id,
    items,
});

export const carts: ReturnType<typeof CART>[] = [
    CART('5454', [
        {
            product: products[0],
            count: 1,
        },
    ]),
];
