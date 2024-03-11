import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  products: [], // Array to hold the items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      if (existingProduct) {
        // If the item already exists in the cart, increment its quantity
        existingProduct.quantity++;
      } else {
        // If it's a new item, add it to the cart array
        state.products.push({ ...newProduct, quantity: 1 });
      }
    },
    setToCart:(state, {payload}) => {
state.products = payload;
    }
    // You can define other actions such as removeFromCart, updateQuantity, etc.
  },
});

export const { addToCart, setToCart } = cartSlice.actions;
//   export default cartSlice.reducer;
export const getProducts = (state) => state.cart.products
export default cartSlice.reducer

