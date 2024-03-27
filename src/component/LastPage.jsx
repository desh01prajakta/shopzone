import { useNavigate } from "react-router-dom";
import "../style/lastpage.css"

function LastPage() {
  const navigate = useNavigate();
  const eventHandler = () => {
    navigate("/productList");
  };

  return (
    <div>
      <h2>Your Order has been Placed!</h2>
      <button className="lastpage" onClick={eventHandler}>Continue Shopping!</button>
    </div>
  );
}

export default LastPage;
