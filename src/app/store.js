import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/dataProductsSlice';
import productsIdReducer from '../features/dataProductIdSlice';
import cartReducer from '../features/dataCartSlice';
import userReducer from '../features/dataUserSlice'
import orderReducer from '../features/orderSlice'
import orderPayReducer from "../features/orderPaySlice";

export default configureStore({
    reducer: {
        products: productsReducer,
        productsId: productsIdReducer,
        cart: cartReducer,
        user: userReducer,
        order: orderReducer,
        orderPay: orderPayReducer,
    }
})