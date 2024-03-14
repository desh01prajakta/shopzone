import { useParams } from "react-router-dom";

import {
  useDeleteCartMutation,
  usePostCartMutation,
  useUpdateCartMutation,
  useGetCartsQuery,
  useCartsQuery
} from "../redux/api";
import { useSelector, useDispatch } from "react-redux";
import { setToCart } from "../cartSlice";
import { useState } from "react";

function Carts() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);

   const [quantity, setQuantity] = useState(0)
  
  const incrementButton =() => {
    setQuantity(quantity+1)
  };
  const removeButton = () => {
    setQuantity(quantity -1)
  }
  
    return (
    <div>
      <h2>Selected Items</h2>
      {cartProducts.map((product) => (
        <div key={product.id} className="container">
          <img className="picture" src={product.image} alt={product.title} />
          <div className="details">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            {/* <p>Category: {product.category}</p> */}
            {/* <img src="../../public/images/star.png" width="15px" /> */}
            </div>
    </div>
      ))}
      <div>
      <p>Quantity: {quantity}</p>
              <button className="button" onClick={incrementButton}>Add Quantity</button>
              <button className="button" onClick={removeButton}>Remove Item</button>
            </div>
            <div>
              <button>Proceed To Checkout</button>
              <button>Continue Shopping</button>
              </div>

    </div>
  );
}

export default Carts;
