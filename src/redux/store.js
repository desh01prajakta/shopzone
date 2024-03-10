import {configureStore} from "@reduxjs/toolkit"
import { apiSlice } from "./api";
import { createSlice } from "@reduxjs/toolkit";
import Carts from "../component/Cart";
import cartReducer from "../cartSlice"

// const initialState = {
//     items: [], // Array to hold the items in the cart
//   };
//   const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//       addToCart: (state, action) => {
//         const newProduct = action.payload;
//         const existingProduct = state.product.find(product => product.id === newProduct.id);
  
//         if (existingProduct) {
//           // If the item already exists in the cart, increment its quantity
//           existingProduct.quantity++;
//         } else {
//           // If it's a new item, add it to the cart array
//           state.product.push({ ...newProduct, quantity: 1 });
//         }
//       },
//       // You can define other actions such as removeFromCart, updateQuantity, etc.
//     },
//   });
  
//   export const { addToCart } = cartSlice.actions;
// //   export default cartSlice.reducer;

export default configureStore({
    reducer: {
        // [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartReducer
    },
middleware: (getDefaultMiddleware)=>
getDefaultMiddleware().concat(apiSlice.middleware),});