import { useState } from "react";
// import api
import { useRegisterMutation } from "../redux/api";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const [] = useRegisterMutation();

  const eventHandler = (event) => {
    event.preventDefault();
    Register(userInfo);
  };

  const onUserInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <h2>Register</h2>
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
        <label>
          Email
          <input
            type="text"
            placeholder="email"
            name="email"
            value={userInfo.email}
            onChange={onUserInput}
          />
        </label>
        <label>
          First Name
          <input
            type="text"
            placeholder="first_name"
            name="first_name"
            value={userInfo.first_name}
            onChange={onUserInput}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            placeholder="last_name"
            name="last_name"
            value={userInfo.last_name}
            onChange={onUserInput}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}


export default Register;
