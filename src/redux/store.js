import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlices'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer
    }
})
