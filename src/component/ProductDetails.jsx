import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  const { data, error, isLoading } = useProductDetailsQuery(id);

  if (isLoading) {
    return <p>Data is Loading!</p>;
  }

  if (error) {
    return <p>Something Went Wrong!</p>;
  }

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
          </div>
          </div>
  );
}
export default ProductDetails;
