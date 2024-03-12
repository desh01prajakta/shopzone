import { useCartsQuery } from "../redux/api";
import { useParams } from "react-router-dom";
import { useDeleteCartMutation, usePostCartMutation, useUpdateCartMutation, useGetCartsQuery } from "../redux/api";
import { useState } from "react";


function Carts (){
  let { id } = useParams();
  
  const [totalPrice,setTotalPrice] = useState([]);

    // const { data, error, isLoading } = useCartsQuery({id, token });


    // if (error) {
    //     return <p>Something went wrong!</p>;
    //   }
    
    //   if (isLoading) {
    //     return <p>Loading...</p>;
    //   } 
    
    return(
      <div>
        <h2>Selected Items</h2>
       
        </div>
    )
}

export default Carts;