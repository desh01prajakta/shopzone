import { useProductDetailsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/store";
import { Link } from "react-router-dom";
import "../style/productList.css"
import { useState } from "react";
import { addToCart, setToCart } from "../cartSlice";


function ProductDetails() {
  const products = useSelector (state => state.cart);
  const dispatch = useDispatch();
  let { id } = useParams();
  const { data, error, isLoading } = useProductDetailsQuery(id);
  const completeProduct = productId => {
    const updatedProducts = products.map(product => {
      if (product.id === productId){
        return {
          ...product, 
          completed: !product.completed
        }
      }else {
        return product
      }
    })
    // dispatch (setToCart(updatedProducts));
  }
  console.log(products)
  
  // const completeProduct = (product) => {
  //   // event.preventDefault()
  //   dispatch(setToCart([...products, product]));
  // };
  
  if (isLoading) {
    return <p>Data is Loading!</p>;
  }

  if (error) {
    return <p>Something Went Wrong!</p>;
  };
  const addCart = () => {
    dispatch(addToCart())
  }
  
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
            <button onClick = {addCart} >Add to Cart</button>
            </div>
            </div>
          </div>
          </div>
  );
}
export default ProductDetails;
