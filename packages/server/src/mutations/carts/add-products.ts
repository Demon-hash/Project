import { carts } from 'entities';
import type { InputAddCartProduct } from 'generated';
import { createCart } from './create-cart';

export const addCartProducts = (
    id: string,
    products: InputAddCartProduct[],
) => {
    const cart = carts.find(c => c.id === id);
    if (cart) {
        cart.products.push(...products);
        return cart;
    }

    return createCart(products);
};
