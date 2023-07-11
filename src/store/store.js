import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import menuReducer from './menuSlice';
import basketReducer from './basketSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    menu: menuReducer,
    basket: basketReducer,
  },
});

export default store;

