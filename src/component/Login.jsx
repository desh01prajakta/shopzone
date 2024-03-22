import { useLoginMutation } from "../redux/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsersQuery } from "../redux/api";
import "../style/login.css";

function Login(props) {
  // const [login, { data, error, isLoading }] = useLoginMutation();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setError] = useState(null);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const { data: allUserData, error } = useUsersQuery();

  const eventHandler = async (event) => {
    event.preventDefault();
    const { data, error } = await login(userInfo);
    if (error) {
      // error.data
      setError(error.data);
    } else {
      const userData = allUserData.find((user) => {
        if (
          userInfo.username === user.username &&
          userInfo.password === user.password
        ) {
          return user;
        }
      });
      // data.token
      props.setToken(data.token);
      props.setUserId(userData.id);

      //TODO: change to product list route later
      navigate(`/account/${userData.id}`);
    }
  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="loginContainer">
      <div className="loginpage">
        <h2 className="login">LogIn</h2>
        <div className="form">
          {errorMsg ? <p>{errorMsg}</p> : <span />}
          <form onSubmit={eventHandler}>
            <label className="details2">
              Username
              <input
                type="text"
                placeholder="username"
                name="username"
                autoComplete="on"
                value={userInfo.username}
                onChange={onUserInput}
              />
            </label>
            <label className="details2">
              Password
              <input
                name="password"
                type="password"
                placeholder="password"
                autoComplete="on"
                value={userInfo.password}
                onChange={onUserInput}
              />
            </label>

            <button className="button1">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
