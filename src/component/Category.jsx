import "../style/category.css";
import { useState } from "react";

function Category({ selectedCategory, setSelectedCategory }) {
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    
  };

  return (
    <div className="mil">
      <h2 className="title"> Category </h2>
      <label className="category">
        <input onChange={handleChange} type="radio" name="test" value="All" title="All" />
        All
      </label>
      <label className="category">
        <input
          onChange={handleChange}
          type="radio"
          name="test"
          value="Men's clothing"
          title="Men's clothing"
        />
        Men's clothing
      </label>
      <label className="category">
        <input
          onChange={handleChange}
          type="radio"
          name="test"
          value="jewelery"
          title="jewelery"
        />
        jewelery
      </label>
      <label className="category">
        <input
          onChange={handleChange}
          type="radio"
          name="test"
          value="Electronics"
          title="Electronics"
        />
        Electronics
      </label>
      <label className="category">
        <input
          onChange={handleChange}
          type="radio"
          name="test"
          value="Women's Clothing"
          title="Women's Clothing"
        />
        Women's Clothing
      </label>
    </div>
  );
}
export default Category;
