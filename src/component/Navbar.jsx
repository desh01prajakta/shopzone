import { NavLink, useNavigate } from "react-router-dom";
import "../style/navbar.css";

function Navbar(props) {
  const navigate = useNavigate();
  const id = props.id;
  const logoutUser = () => {
    props.setToken(null);
    navigate("/");
  };
  if (props.token) {
    return (
      <nav className="nav">
        <NavLink className="li" to="/">Home</NavLink>
        <NavLink className="li" to={`/account/${id}`}>Account</NavLink>
        <a className="li" onClick={logoutUser}>Logout</a>
        <NavLink className="li" to="/productlist">Product List</NavLink>
        <NavLink className="li" to={"/cart"}>Cart</NavLink>
      </nav>
    );
  }
  return (
    <nav className="nav">
      <NavLink className="li" to="/">Home</NavLink>
      <NavLink className="li" to="/register">Register</NavLink>
      <NavLink className="li" to="/login">Login</NavLink>
      <NavLink className="li" to="/productlist">Product List</NavLink>
    </nav>
  );
}
export default Navbar;
