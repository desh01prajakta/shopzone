import { NavLink, useNavigate } from "react-router-dom";

function Navbar(props) {
    const navigate = useNavigate();
  const logoutUser = () => {
    props.setToken(null);
    navigate("/")
  };
  if (props.token) {
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/account">Account</NavLink>
        <a onClick={logoutUser}>Logout</a>
        <NavLink to="/productlist">Product List</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>
    );
  }
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/account">Account</NavLink>
      <NavLink to="/productlist">Product List</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}
export default Navbar;
