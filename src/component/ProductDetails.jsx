import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../style/productDetails.css";
import { Link } from "react-router-dom";
import { addToCart } from "../cartSlice";
import "../style/navbar.css"

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
    <div className="productPage">
      <h2 className="heading">Product Details</h2>

      <div className="container1">
        <img className="picture1" src={data.image} alt={data.title} />
        <div className="details1">
          <h3> {data.title}</h3>
          <p>Price: {data.price}</p>
          <p>Description: {data.description} </p>
          <p>Category: {data.category}</p>
          <div className="rating1">
          <img src="../../public/images/star.png" width={"15px"} />
          <span>{data.rating.rate}</span>
          <span>({data.rating.count})</span>
          </div>
          <div className="prod1">
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
