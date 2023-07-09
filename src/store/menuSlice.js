// menuSlice.js

import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
  name: 'menu',
  initialState: [],
  reducers: {
    setMenuOptions: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMenuOptions } = menuSlice.actions;

export default menuSlice.reducer;
