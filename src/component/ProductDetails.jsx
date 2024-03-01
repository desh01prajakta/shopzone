import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/store";

function ProductDetails() {
  let { id } = useParams();
  const { data, error, isLoading } = useProductDetailsQuery(id);
  const dispatch = useDispatch();

  const handleAddToCart = async(event) => {
    event.preventDefault();
    // Dispatch an action to add the product to the cart
    dispatch(addToCart(data)); // Assuming `data` contains all necessary information about the product
  };

  if (isLoading) {
    return <p>Data is Loading!</p>;
  }

  if (error) {
    return <p>Something Went Wrong!</p>;
  };
  
  return (
    <div>
      <h2>Product Details</h2>
      
          <div>
            <img src={data.image} />
            <p>Price: {data.price}</p>
            <p>Description: {data.description} </p>
            <p>Category: {data.category}</p>
            <p>
              Rating: {data.rating.rate} ({data.rating.count})
            </p>
            <button onClick={handleAddToCart}>Add To Cart</button>
          </div>
          </div>
  );
}
export default ProductDetails;
