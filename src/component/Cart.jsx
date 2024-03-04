import { useCartsQuery } from "../redux/api";


function Cart (props){
    const { data, error, isLoading } = useCartsQuery();

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

export default Cart;