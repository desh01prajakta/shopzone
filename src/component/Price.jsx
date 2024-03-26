import "../style/price.css"

function Price({setSelectedPrice}){
    const handleChange = (event) => {
        setSelectedPrice(event.target.value);
      };
    return(
        <div className="categorycontainer">
            <h2 className="sidebar-title-price-title">Price</h2>
            <label className="category">
            <input onChange = {handleChange} type="radio" name="test2" value= "All"
          title="All" />
            All
           </label>
            <label className="category">
            <input onChange = {handleChange} type="radio" name="test2" value= "0 100"
          title="$0 - $100" />
            $0 - $100
           </label>
           <label className="category">
            <input onChange = {handleChange} type="radio" name="test2" value= "100 200"
          title="$100-$200" />
            $100 - $200
           </label>
           <label className="category">
            <input onChange = {handleChange} type="radio" name="test2" value= "200 500"
          title="$200-$500"  />
            $200 - $500
           </label>
           <label className="category">
            <input onChange = {handleChange} type="radio" name="test2" value= "500 1000"
          title="$500 - $1000"  />
            $500 - $1000
           </label>
        </div>

    )
}
export default Price;