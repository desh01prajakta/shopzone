import ProductList from "./ProductList"
import Category from "./Category"
import Price from "./Price"

function Home() {
  

    return (
      <div><h1>Welcome To Shopzone!</h1>
      <p>
      Start shopping and win exciting prices!</p>
      <Category />
      <Price />
      <ProductList />
      </div>
    )
  }
  
  export default Home