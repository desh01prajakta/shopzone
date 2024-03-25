import ProductList from "./ProductList"
import "../style/home.css";
import image from "../../public/shopzone.jpg"

function Home() {
  

    return (
      <div>
        <h3 className="title1" >Shopzone!!</h3>
      <div className="imageContainer">
        <img className= "shopImage" src= {image}/>
        <div className="overlayText">
        <h1>Welcome To Shopzone!</h1>
      <p>
      Start shopping and win exciting prices!</p>
      </div>
      <ProductList />
      </div>
      </div>
    )
  }
  
  export default Home