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
        // Add the selected item to the basket
        const { menuOptionId, optionId } = action.payload;
        const menuOption = state.find((option) => option.id === menuOptionId);
        if (menuOption) {
          const selectedOption = menuOption.menu_options.find((option) => option.id === optionId);
          if (selectedOption) {
            selectedOption.inBasket = true;
          }
        }
      },
      removeFromBasket: (state, action) => {
        // Remove the selected item from the basket
        const { menuOptionId, optionId } = action.payload;
        const menuOption = state.find((option) => option.id === menuOptionId);
        if (menuOption) {
          const selectedOption = menuOption.menu_options.find((option) => option.id === optionId);
          if (selectedOption) {
            selectedOption.inBasket = false;
          }
        }
      },
  },
});

export const { setMenuOptions, addToBasket, removeFromBaske } = menuSlice.actions;

export default menuSlice.reducer;
