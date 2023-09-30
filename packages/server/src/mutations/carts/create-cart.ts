import type { InputAddCartProduct } from 'generated';
import { CART, carts } from '../../entities/cart';

export const createCart = (products: InputAddCartProduct[]) => {
    const cart = CART({
        id: new Date().getTime().toString(),
        products,
    });

    carts.push(cart);
    return cart;
};
