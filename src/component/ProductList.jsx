import { useProductListQuery } from "../redux/api";

function ProductList() {
  const { data, error, isLoading } = useProductListQuery();

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
          <div key={product.id}>
            <img src={product.image} />
            <h3> {product.title}</h3>
            <h5>
               Rating: {product.rating.rate} ({product.rating.count})
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
