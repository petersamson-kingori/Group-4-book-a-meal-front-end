// menuSlice.js

import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    setMenuOptions: (state, action) => {
      return action.payload;
    },
    addToBasket: (state, action) => {
      // Add the item to the basket
      const { item } = action.payload;
      state.push(item);
    },
    removeFromBasket: (state, action) => {
      // Remove the item from the basket
      const { itemId } = action.payload;
      return state.filter((item) => item.id !== itemId);
    },
  },
});

export const { setMenuOptions, addToBasket, removeFromBasket } = menuSlice.actions;

export default menuSlice.reducer;
