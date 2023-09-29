import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.ts';

const { DEV } = import.meta.env;
export const store = configureStore({
    reducer: {
        cart: cartSlice,
    },
    devTools: DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
