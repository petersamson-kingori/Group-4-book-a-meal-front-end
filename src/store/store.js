import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";
import cartUiSlice from "./shopping-cart/cartUiSlice";
import menuReducer from './menuSlice';
//import cart2Reducer from './cart2slice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartUi: cartUiSlice.reducer,
    menu: menuReducer,
   // cart2: cart2SliceReducer,
  },
});

export default store;

