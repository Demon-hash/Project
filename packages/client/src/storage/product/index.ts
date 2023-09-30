import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from 'generated';

const initialState: Product = {
    id: '',
    imageUrl: '',
    price: 0,
    stock: 0,
    brand: null,
    category: null,
    color: null,
    description: null,
    material: null,
    size: null,
    title: null,
    type: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<Product | null | undefined>) => ({
            ...(action.payload ?? state),
        }),
    },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
