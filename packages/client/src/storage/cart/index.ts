import {
    type PayloadAction,
    createSelector,
    createSlice,
} from '@reduxjs/toolkit';
import type { RootState } from 'storage';
import type { ReferenceToCart } from 'generated';

const initialState: ReferenceToCart = {
    id: '',
    products: null,
};

const cart = (state: RootState) => state.cart;
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        update: (
            state,
            action: PayloadAction<ReferenceToCart | null | undefined>,
        ) => ({
            ...(action.payload ?? state),
        }),
    },
});

export const { update } = cartSlice.actions;
export const selectCartId = createSelector(cart, cart => cart.id);
export const selectCartProducts = createSelector(cart, cart => cart.products);
export default cartSlice.reducer;
