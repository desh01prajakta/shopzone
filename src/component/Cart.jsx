import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addToCart, removeCart } from "../cartSlice";
import "../style/cart.css";

function Carts({ token, userId }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cartProducts) {
      const stoaredCartItems = cartProducts || [];
      const total = stoaredCartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      setTotalPrice(total);
    }
  }, [cartProducts]);

  const incrementButton = (product) => {
    dispatch(addToCart(product));
  };
  const removeButton = (product) => {
    dispatch(removeCart(product));
  };
  const checkoutButton = () => {
    navigate("/checkout");
  };
  const continueShoppingButton = () => {
    navigate("/productList");
  };

  return (
    <div className="cartlist5">
      <h2 className="items">Selected Items</h2>
      <div className="cartcontainer">
        {cartProducts.map((product) => (
          <div key={product.id} className="container5">
            <img className="picture" src={product.image} alt={product.title} />
            <div className="details5">
              <h3 className="title5">{product.title}</h3>
              <p className="price5">Price: {product.price}</p>
              <p className="quantity5">Quantity: {product.quantity}</p>
              <button
                className="button5"
                onClick={() => incrementButton(product)}
              >
                Add Quantity
              </button>
              <button className="button5" onClick={() => removeButton(product)}>
                Remove Item
              </button>
            </div>
          </div>
        ))}
        <div></div>
      </div>
      <div className="bottombar">
        <button className="button55" onClick={checkoutButton}>
          Proceed To Checkout
        </button>
        <button className="button55" onClick={continueShoppingButton}>
          Continue Shopping
        </button>
        <p className="button123">Total Price {totalPrice}</p>
      </div>
    </div>
  );
}

export default Carts;
