import { useProductListQuery } from "../redux/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../style/productList.css";
import Category from "./Category";
import Price from "./Price";
import star from "../../public/star.png"

function ProductList() {
  const { data, error, isLoading } = useProductListQuery();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const productCategory =
    selectedCategory && data
      ? data?.filter((product) => {
          if (selectedCategory === "All") {
            return product;
          }
          return (
            product.category.toLowerCase() === selectedCategory.toLowerCase()
          );
        })
      : data;
  const productToDisplay =
    selectedPrice && productCategory
      ? productCategory.filter((product) => {
          let range = selectedPrice.split(" ");
          if (selectedPrice === "All") {
            return product;
          }
          return (
            product.price <= parseInt(range[1]) &&
            product.price >= parseInt(range[0])
          );
        })
      : data;

  return (
    <div className="productListContainer">
      <h2 className="productList">Products</h2>
      <Category
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Price
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
      />
      <div className="productContainer">
      {productToDisplay.map((product) => {
        return (
          <div className="container" key={product.id}>
            <img className="picture" src={product.image} />
            <div className="details">
              <h3 className="title7"> {product.title}</h3>
              <div className="rating">
              <img src= {star} width={"15px"} />
              <span>{product.rating.rate}</span>
              <span>({product.rating.count})</span>
              <div>
              <Link className="prod" to={`/productdetails/${product.id}`}>
                  Product Details
                </Link>
                </div>
                </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}

export default ProductList;
