import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  initialState: false,
  name: 'modal',
  reducers: {
    setModal: (_, { payload }: PayloadAction<boolean>) => payload,
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
