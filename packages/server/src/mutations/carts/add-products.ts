import { carts } from 'entities';
import type { InputAddCartProduct } from 'generated';
import { CART } from '../../entities/cart';

export const addCartProducts = (
    id: string,
    products: InputAddCartProduct[],
) => {
    let cart = carts.find(c => c.id === id);
    if (cart) {
        cart.products.push(...products);
        return cart.id;
    }

    cart = CART({
        id,
        products,
    });

    carts.push(cart);
    return cart.id;
};
