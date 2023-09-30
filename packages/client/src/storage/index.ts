import {
    type TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import productSlice from './product';

const { DEV } = import.meta.env;
export const store = configureStore({
    reducer: combineReducers({
        cart: cartSlice,
        product: productSlice,
    }),
    devTools: DEV,
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
