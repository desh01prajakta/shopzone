import "../style/category.css"

function Category(){
    return(
        <div className="mil">
           <h2 className="title"> Category </h2>
           <label className="category">
            <input type="radio" name="test" />
            <span className="checkmark"></span>All
           </label>
           <label className="category">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Men's clothing
           </label>
           <label className="category">
            <input type="radio" name="test" />
            <span className="checkmark"></span>jewelery
           </label>
           <label className="category">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Electronics
           </label>
           <label className="category">
            <input type="radio" name="test" />
            <span className="checkmark"></span>Women's Clothing
           </label>
            </div>
    )
}
export default Category;