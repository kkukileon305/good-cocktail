import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
