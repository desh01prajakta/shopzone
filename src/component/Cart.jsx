import { useCartsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDeleteCartMutation, usePostCartMutation, useUpdateCartMutation, useGetCartsQuery } from "../redux/api";
import { useState } from "react";


function Carts (props){
  let { id } = useParams();
  
  const [totalPrice,setTotalPrice] = useState([]);

    // const { data, error, isLoading } = useCartsQuery({id, token });


    // if (error) {
    //     return <p>Something went wrong!</p>;
    //   }
    
    //   if (isLoading) {
    //     return <p>Loading...</p>;
    //   } 
    console.log(props.cartItems)
    return(
      <div>
        <h2>Selected Items</h2>
        {props.cartItems && props.cartItems.map(product => {
          <div key = {product.id}>
            <h3>{product.title}</h3>
            
          </div>
        })}
        </div>
    )
}

export default Carts;