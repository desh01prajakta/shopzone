import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../style/productList.css";
import { Link } from "react-router-dom";
import { addToCart } from "../cartSlice";

function ProductDetails({ token }) {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { data, error, isLoading } = useProductDetailsQuery(id);

  const handleAddToCart = () => {
    const product = {
      id: data.id,
      image: data.image,
      title: data.title,
      price: data.price,
    };
    dispatch(addToCart(product));
  };
  if (isLoading) {
    return <p>Data is Loading!</p>;
  }

  if (error) {
    return <p>Something Went Wrong!</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>

      <div className="container">
        <img className="picture" src={data.image} alt={data.title} />
        <div className="details">
          <h3> {data.title}</h3>
          <p>Price: {data.price}</p>
          <p>Description: {data.description} </p>
          <p>Category: {data.category}</p>
          <img src="../../public/images/star.png" width={"15px"} />
          <span>{data.rating.rate}</span>
          <span>({data.rating.count})</span>
          <div className="prod">
            {token && (
              <Link to={"/cart"} onClick={handleAddToCart}>
                Add to Cart
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
