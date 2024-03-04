import "../style/price.css"

function Price(){
    return(
        <div className="mil">
            <h2 className="sidebar-title-price-title">Price</h2>
            <label className="category">
            <input type="radio" name="test2" />
            <span className="checkmark"></span>$0 - $100
           </label>
           <label className="category">
            <input type="radio" name="test2" />
            <span className="checkmark"></span>$100 - $200
           </label>
           <label className="category">
            <input type="radio" name="test2" />
            <span className="checkmark"></span>$200 - $500
           </label>
           <label className="category">
            <input type="radio" name="test2" />
            <span className="checkmark"></span>$500 - $1000
           </label>
        </div>

    )
}
export default Price;