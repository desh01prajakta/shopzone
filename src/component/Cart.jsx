import { useParams, useNavigate } from "react-router-dom";
import {useDeleteCartMutation, useCartsQuery} from "../redux/api";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

function Carts({ token, userId }) {
  let { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const cartProducts = useSelector((state) => state.cart.cart);
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [deleteCart] = useDeleteCartMutation();

// const {data: cartData, error: cartError, isLoading: cartLoading} = useCartsQuery({token, id:userId});

// console.log("this is a cart data api", cartData)
// useEffect(() => {
//       if(cartData){
//   const stoaredCartItems = cartData?.products || [];
//     const total = stoaredCartItems.reduce((acc, item) => {
//       return acc + item.price * item.quantity;
//     }, 0);
//     setTotalPrice(total);
//   }
// }, [cartData]);
 
  const incrementButton = () => {
    setQuantity(quantity + 1);
  };
  const removeButton = () => {
    setQuantity(quantity - 1);
  };
  const checkoutButton = () => {
    navigate("/checkout");
  };
  const continueShoppingButton = () => {
    navigate("/productList");
  };
  // if (cartError) {
  //   return <p>Error: {cartError.message}</p>;
  // }


  return (
    <div>
      <h2>Selected Items</h2>
      {cartProducts.map((product) => (
        <div key={product.id} className="container">
          <img className="picture" src={product.image} alt={product.title} />
          <div className="details">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Quantity: {quantity}</p>
        <button className="button" onClick={incrementButton}>
          Add Quantity
        </button>
        <button className="button" onClick={removeButton}>
          Remove Item
        </button>

          </div>
        </div>
      ))}
      <div>
        
      </div>
      <div>
        <button className="button" onClick={checkoutButton}>
          Proceed To Checkout
        </button>
        <button className="button" onClick={continueShoppingButton}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}

export default Carts;
