import { useProductListQuery } from "../redux/api";

function ProductList() {
  const { data, error, isLoading } = useProductListQuery();

  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log("DATA", data);
  console.log("ERROR", error);
  console.log("isLoading", isLoading);

  return (
    <div>
      <h2>Product List</h2>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <img src={product.image} />
            {/* <h2>Category: {product.category}</h2> */}
            <h3> {product.title}</h3> 
            <h5>Rating: {product.rating.rate}</h5>
            <h6>Count: {product.rating.count}</h6>
            {/* <h3> {product.description}</h3>                        */}
            {/* <Link to={`/productdetails/${product.id}`}>See More Details</Link> */}
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
