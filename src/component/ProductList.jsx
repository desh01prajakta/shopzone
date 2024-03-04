import { useProductListQuery } from "../redux/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/productList.css"


function ProductList() {
  const { data, error, isLoading } = useProductListQuery();
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); 


  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  return (
    <div>
      <h2>Product List</h2>
      {data.map((product) => {
        return (
          <div className="container" key={product.id}>
            <img className= "picture" src={product.image} />
            <div className="details">
            <h3> {product.title}</h3>
            <img src="./images/star.png" />
            <span>{product.rating.rate}</span>
            <span>({product.rating.count})</span>
            <h5>
               Rating: {product.rating.rate} ({product.rating.count})
            </h5>
            <Link className = "prod" to={`/productdetails/${product.id}`}>See Details</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
