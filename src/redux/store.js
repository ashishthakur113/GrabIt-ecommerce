import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import wishlistReducer from './wishListSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export default store; 
