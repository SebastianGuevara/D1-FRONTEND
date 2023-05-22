import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlices'
import menuReducer from './slices/menuSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        user: userReducer,
        menu: menuReducer
    }
})
