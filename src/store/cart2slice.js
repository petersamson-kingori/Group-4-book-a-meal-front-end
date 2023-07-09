import { createSlice } from '@reduxjs/toolkit';

const cart2Slice = createSlice({
  name: 'cart2',
  initialState: [],
  reducers: {
    addToCart2: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart2: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cart2Slice.reducer;