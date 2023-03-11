import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../slice/UserSlice';
import CartReducer from '../slice/CartSlice';
import ProductReducer from '../slice/ProductSlice';
import BrandReducer from '../slice/BrandSlice';

const store = configureStore({
    reducer:{
        user: UserReducer,
        cart: CartReducer,
        product:ProductReducer,
        brand:BrandReducer
    }
});

export default store;