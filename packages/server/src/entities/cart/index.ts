import type { ReferenceToCartProduct } from 'generated';
import { products } from '../product';

export interface Cart {
    readonly id: string;
    readonly products: ReferenceToCartProduct[];
}

export const CART = ({ id, products }: Cart) => ({
    id,
    products,
});

export const carts: ReturnType<typeof CART>[] = [
    CART({
        id: 'test',
        products: [
            {
                id: products[0].id,
                count: 1,
            },
            /*{
                id: products[1].id,
                count: 1,
            },*/
        ],
    }),
];
