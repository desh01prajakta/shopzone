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
  
  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      // Toggle sorting order if the same criteria is clicked again
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If sorting criteria changed, set new criteria and default to ascending order
      setSortBy(criteria);
      setSortOrder('asc');
    }
  };
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === 'title') {
      return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
    } else if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
      <h2>Product List</h2>
      <div>
        <button onClick={() => handleSort('title')}>Sort by Title</button>
        <button onClick={() => handleSort('price')}>Sort by Price</button>
      </div>
      <button>Filter</button>
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
