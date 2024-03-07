import { useCartsQuery } from "../redux/api";
import { useParams } from "react-router-dom";


function Carts ({token}){
  let { id } = useParams();
  console.log(id)
  
    const { data, error, isLoading } = useCartsQuery({id, token });

    if (error) {
        return <p>Something went wrong!</p>;
      }
    
      if (isLoading) {
        return <p>Loading...</p>;
      } 
    return(
        <h2>Cart</h2>
    )
}

export default Carts;