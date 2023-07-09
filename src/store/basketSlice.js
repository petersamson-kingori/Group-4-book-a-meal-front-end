// store/basketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;