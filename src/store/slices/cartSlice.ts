import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addCart: (state, { payload }: PayloadAction<CartItem>) => [...state, payload],
    removeCart: (state, { payload }: PayloadAction<string>) => state.filter(item => item.idDrink !== payload),
    removeAll: () => [],
  },
});

export const { addCart, removeAll, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
