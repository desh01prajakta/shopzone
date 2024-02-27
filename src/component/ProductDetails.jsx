import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";


function ProductDetails(){
    let { id } = useParams();
    const{data, error, isLoading} = useProductDetailsQuery(id);

    if (isLoading){
        return <p>Data is Loading!</p>
    };

    if(error){
        return <p>Something Went Wrong!</p>
    };

    console.log("data", data);
    console.log("error", error);
    console.log("isLoading", isLoading)

    return(
        <div>
            <h2>Product Details</h2>
            <img src={product.image} />
            <p>Price: {product.price}</p>
            <p> Description: {product.description} </p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count})</p>
            </div>
        );
      }
export default ProductDetails;