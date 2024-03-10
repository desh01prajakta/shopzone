import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/store";
import { Link } from "react-router-dom";
import "../style/productList.css"
import { useState } from "react";


function ProductDetails(props) {
  console.log(props)
  let { id } = useParams();
  const { data, error, isLoading } = useProductDetailsQuery(id);
  // const [addToCart, setAddToCart] = useState(null)

  const handleClick = (product) => {
    // event.preventDefault()
    console.log(props.cartItems)
    props.setCartItems([...props.cartItems, product]);
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
      
          <div className="container" >
            <img className= "picture" src={data.image} />
            <div className="details">
            <h3> {data.title}</h3>
            <p>Price: {data.price}</p>
            <p>Description: {data.description} </p>
            <p>Category: {data.category}</p>
            <img src="../../public/images/star.png"  width={
              "15px"
            }/>
            <span>{data.rating.rate}</span>
            <span>({data.rating.count})</span>
            <div className="prod">
            <Link onClick = {() => handleClick(data)} to={"/cart"}>Add to Cart</Link>
            </div>
            {/* <button onClick={handleAddToCart}>Add To Cart</button> */}
            </div>
          </div>
          </div>
  );
}
export default ProductDetails;
