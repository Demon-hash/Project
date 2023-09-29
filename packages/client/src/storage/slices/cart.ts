import { createSlice } from '@reduxjs/toolkit';

interface CartState {
    readonly id: null | string;
}

const initialState: CartState = {
    id: null,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setId: (state, action) => {
            state.id = action.payload;
        },
    },
});

export const { setId } = cartSlice.actions;
export default cartSlice.reducer;
