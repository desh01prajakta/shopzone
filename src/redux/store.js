import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./api";
import { createSlice } from "@reduxjs/toolkit";
import Carts from "../component/Cart";
import cartReducer from "../cartSlice"


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer,
        
    },
middleware: (getDefaultMiddleware)=>
getDefaultMiddleware().concat(apiSlice.middleware),});

export default store;