import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Array to hold the items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cart.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...newProduct, quantity: 1 });
      }
      return state;
    },
    setToCart: (state, { payload }) => {
      state.cart = payload;
      return state;
    },
    removeCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.cart.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        existingProduct.quantity--;
        if (existingProduct.quantity <= 0) {
          state.cart = state.cart.filter((product) => {
            return product.id !== newProduct.id;
          });
        }
      }
      return state;
    },
  },
});

export const { addToCart, setToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
