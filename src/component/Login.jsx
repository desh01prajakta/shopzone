import { useLoginMutation } from "../redux/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
  // const [login, { data, error, isLoading }] = useLoginMutation();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setError] = useState(null);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const eventHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await login(userInfo);
    if (error) {
      // error.data
      setError(error.data);
    } else {
      // data.token
      props.setToken(data.token);
      //TODO: change to product list route later
      navigate("/account");
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }
    setUserInfo({ ...userInfo, [e.target.username]: e.target.value });
  };

  // if(data && data.user){
  //   const user = data.user.find((user) => userInfo.username && user.password === userInfo.password);
  //   if (user){
  //     props.setUserId(user.id);
  //   } else {
  //     setError("Invalid username or password");
  //   }
  // }

  return (
    <div>
      <h2>LogIn</h2>
      {errorMsg ? <p>{errorMsg}</p> : <span />}
      <form onSubmit={eventHandler}>
        <label>
          Username
          <input
            type="text"
            placeholder="username"
            name="username"
            value={userInfo.username}
            onChange={onUserInput}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            placeholder="password"
            value={userInfo.password}
            onChange={onUserInput}
          />
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
}
export default Login;
