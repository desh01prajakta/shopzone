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
        // If the item already exists in the cart, increment its quantity
        existingProduct.quantity++;
      } else {
        // If it's a new item, add it to the cart array
        state.cart.push({ ...newProduct, quantity: 1 });
      }
      return state
    },
    setToCart: (state, { payload }) => {
      state.cart = payload;
      return state
    },
    
    // You can define other actions such as removeFromCart, updateQuantity, etc.
  },
});

export const { addToCart, setToCart } = cartSlice.actions;
//   export default cartSlice.reducer;
// export const getProducts = (state) => state.cart;
export default cartSlice.reducer;
