import { useNavigate } from "react-router-dom";

function LastPage() {
  const navigate = useNavigate();
  const eventHandler = () => {
    navigate("/productList");
  };

  return (
    <div>
      <h2>Your Order has been Placed</h2>
      <button onClick={eventHandler}>Continue Shopping!</button>
    </div>
  );
}

export default LastPage;
