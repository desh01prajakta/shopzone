import { useCartsQuery } from "../redux/api";


function Carts ({id, token}){
  
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