import { NavLink, useNavigate } from "react-router-dom";
import Category from "./Category";

function Navbar(props) {
    const navigate = useNavigate();
    const id = props.id
  const logoutUser = () => {
    props.setToken(null);
    navigate("/")
  };
  if (props.token) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to={`/account/${id}`}>Account</NavLink>
        <a onClick={logoutUser}>Logout</a>
        <NavLink to="/productlist">Product List</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
        
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/productlist">Product List</NavLink>
         
    </nav>
  );
}
export default Navbar;
