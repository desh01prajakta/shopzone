import ProductList from "./ProductList"
import "../style/home.css";

function Home() {
  

    return (
      <div className="imageContainer">
        <img className= "shopImage" src="../public/images/shopzone.jpg"/>
        <div className="overlayText">
        <h1>Welcome To Shopzone!</h1>
      <p>
      Start shopping and win exciting prices!</p>
      </div>
      <ProductList />
      </div>
    )
  }
  
  export default Home