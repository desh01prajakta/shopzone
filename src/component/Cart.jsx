import { useCartsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import {
  useDeleteCartMutation,
  usePostCartMutation,
  useUpdateCartMutation,
  useGetCartsQuery,
} from "../redux/api";
import { useSelector, useDispatch } from "react-redux";
import { setToCart } from "../cartSlice";

function Carts() {
  let { id } = useParams();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cart);
  // const totalPrice = cartItems.reduce((total, item) => {
  //   return total + item.price * item.quantity;
  // }, 0);

  // const { data, error, isLoading } = useCartsQuery(id);

  // if (error) {
  //     return <p>Something went wrong!</p>;
  //   }

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }
  
  return (
    <div>
      <h2>Selected Items</h2>
      {cartProducts.map((product) => (
        <div key={product.id} className="container">
          <img className="picture" src={product.image} alt={product.title} />
          <div className="details">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <img src="../../public/images/star.png" width="15px" />
            {/* <span>{product.rating.rate}</span> 
            <span>({rating.count})</span> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carts;
