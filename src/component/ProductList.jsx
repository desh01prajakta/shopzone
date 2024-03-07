import { useProductListQuery } from "../redux/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/productList.css"
import Category from "./Category";
import Price from "./Price";


function ProductList() {
  const { data, error, isLoading } = useProductListQuery();
  // const [sortBy, setSortBy] = useState(null);
  // const [sortOrder, setSortOrder] = useState('asc'); 

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState(null);
  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const productCategory = selectedCategory && data? data?.filter(product => {
    if(selectedCategory === "All"){
      return product
    }
    return product.category.toLowerCase().includes(selectedCategory.toLowerCase())
    
  }) : data
  const productToDisplay = selectedPrice && productCategory? productCategory.filter( product => {
    let range = selectedPrice.split(" ")
    return product.price <= parseInt(range [1]) && product.price >= parseInt(range [0])
  }): data

  return (
    <div>
      <h2>Product List</h2>
      <Category selectedCategory ={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <Price selectedPrice = {selectedPrice} setSelectedPrice = {setSelectedPrice} />
      {productToDisplay.map((product) => {
        return (
          <div className="container" key={product.id}>
            <img className= "picture" src={product.image} />
            <div className="details">
            <h3> {product.title}</h3>
            <img src="../../public/images/star.png"  width={
              "15px"
            }/>
            <span>{product.rating.rate}</span>
            <span>({product.rating.count})</span>
            <div>
            <Link className = "prod" to={`/productdetails/${product.id}`}>See Details</Link>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
