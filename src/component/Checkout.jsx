import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LastPage from "./LastPage";
import "../style/checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const backToCartButton = () => {
    navigate("/cart");
  };
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [errorMsg, setError] = useState(null);
  const eventHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await Checkout(userInfo);

    if (error) {
      setError(error.data.message);
      console.log(`error ${JSON.stringify(error.data.message)}`);
    } else {
      //data.token --> has token value
      setToken(data.token);
      console.log(`error ${JSON.stringify(data.token)}`);
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const placeOrderHandler = () => {
    navigate("/lastpage");
  };

  return (
    <div>
      <h2 className="checkout">Checkout</h2>
      <div className="checkoutform">
        <form onSubmit={eventHandler}>
          <label className="details6">
            First Name{" "}
            <input
              type="text"
              placeholder="first_name"
              name="first_name"
              value={userInfo.first_name}
              onChange={onUserInput}
            />
          </label>
          <label className="details6">
            Last Name
            <input
              type="text"
              placeholder="last_name"
              name="last_name"
              value={userInfo.last_name}
              onChange={onUserInput}
            />
          </label>
          <label className="details6">
            Address
            <input
              type="text"
              placeholder="address"
              name="address"
              value={userInfo.address}
              onChange={onUserInput}
            />
          </label>
          <label className="details6">
            Phone Number
            <input
              type="tel"
              placeholder="phone number"
              name="phone"
              value={userInfo.phone}
              onChange={onUserInput}
            />
          </label>
          <label className="details6">
            Email 
            <input
              type="text"
              placeholder="email"
              name="email"
              value={userInfo.email}
              onChange={onUserInput}
            />
          </label>
          <label className= "placeorder" onClick={placeOrderHandler}>Place your order</label>
        </form>
      </div>
      <div>
        <button className="backtocart" onClick={backToCartButton}>Back To Cart</button>
      </div>
    </div>
  );
}
export default Checkout;
