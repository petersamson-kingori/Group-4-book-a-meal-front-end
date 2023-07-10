import { createSlice } from '@reduxjs/toolkit';

const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      state.push(action.payload);
    },
    removeFromBasket: (state, action) => {
      const menuOptionId = action.payload;
      return state.filter((menuOption) => menuOption.id !== menuOptionId);
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
