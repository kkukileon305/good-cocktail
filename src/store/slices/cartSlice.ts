import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = {
  idDrink: string;
  strDrinkThumb: string;
  strDrink: string;
};

const initialState: CartItem[] = JSON.parse(localStorage.getItem('likes') || '[]') as CartItem[];

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    addCart: (state, { payload }: PayloadAction<CartItem>) => {
      const addedCart = [...state, payload];

      localStorage.setItem('likes', JSON.stringify(addedCart));
      return addedCart;
    },
    removeCart: (state, { payload }: PayloadAction<string>) => {
      const removedCart = state.filter(item => item.idDrink !== payload);

      localStorage.setItem('likes', JSON.stringify(removedCart));
      return removedCart;
    },
    removeAll: () => [],
  },
});

export const { addCart, removeAll, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
