import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Checkout (){
    const navigate = useNavigate()
    const backToCartButton = () => {
navigate("/cart")
    }
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
      });
      const [errorMsg,setError] = useState(null)
    ;  
    
      const eventHandler = async(event) => {
        event.preventDefault();
       const {data, error} = await Checkout(userInfo);
    
       if(error){
        setError(error.data.message);
        console.log(`error ${JSON.stringify(error.data.message)}`)
       }
       else{
        //data.token --> has token value
       setToken(data.token);
        console.log(`error ${JSON.stringify(data.token)}`)
       }
      };
    
      const onUserInput = (e) => {
        if(errorMsg){
            setError(null)
        }
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
      };
      
    return(
        <div>
        <div>
        <h2>Checkout</h2>
        <form onSubmit={eventHandler}>
        <label>First Name <input
            type="text"
            placeholder="first_name"
            name="first_name"
            value={userInfo.first_name}
            onChange={onUserInput}
          /></label>
        <label>Last Name
        <input
            type="text"
            placeholder="last_name"
            name="last_name"
            value={userInfo.last_name}
            onChange={onUserInput}
          />
        </label>
        <label>address
        <input
            type="text"
            placeholder="Address"
            name="Address"
            value={userInfo.Address}
            onChange={onUserInput}
          />
        </label>
        <label>Phone Number
        <input
            type= "string"
            placeholder="Number"
            name="Number"
            value={userInfo.number}
            onChange={onUserInput}
          />
        </label>
        <label>Email
        <input
            type="text"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={onUserInput}
          />
        </label>
        <label>Place your order</label>
        </form>
        </div>
        <div>
            <button onClick={backToCartButton}>Back To Cart</button>
        </div>
        </div>
    )
}
export default Checkout;