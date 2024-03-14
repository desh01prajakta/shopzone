import { useProductDetailsQuery } from "../redux/api";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../redux/store";
import "../style/productList.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { addToCart } from "../cartSlice";

function ProductDetails({token}) {
  // const products = useSelector (state => state.cart);
  const dispatch = useDispatch();
  let { id } = useParams();
  const { data, error, isLoading } = useProductDetailsQuery(id);
  // const completeProduct = productId => {
  //   const updatedProducts = products.map(product => {
  //     if (product.id === productId){
  //       return {
  //         ...product,
  //         completed: !product.completed
  //       }
  //     }else {
  //       return product
  //     }
  //   })
  //   // dispatch (setToCart(updatedProducts));
  // }

  const handleAddToCart = () => {
    //     try{
    //       const productId = id;
    //       const cartProduct = {
    //         name: data.title,
    //         productId: productId,
    //         quantity:1,
    //         price: data.price,
    //         image: data.image
    //       };
    //       await addToCart({token, body:{id:userId, products:[cartProduct], productId}});
    // const ls = localStorage.getItem("cartItem")
    // const lsArr = JSON.parse(ls)
    // lsArr.push(cartProduct)
    // localStorage.setItem("cartItems", JSON.stringify(lsArr))
    // setCartItems (prev => [...prev,cartProduct])
    //   navigate ("/cart");
    // }catch(error){
    //   console.error("error adding to cart", error)
    // }
    //     };
    const product = {
      id: data.id, // Assuming data has an id property
      image: data.image,
      title: data.title,
      price: data.price,
      // category: data.category,
      
      // Add more properties as needed
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
            {token && <Link to={"/cart"} onClick={handleAddToCart}>
              Add to Cart
            </Link>}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
