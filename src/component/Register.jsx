import { useState } from "react";
// import api
import { useRegisterMutation } from "../redux/api";

function Register(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const [errorMsg,setError] = useState(null)
;  const [register] = useRegisterMutation();

  const eventHandler = async(event) => {
    event.preventDefault();
   const {data, error} = await register(userInfo);

   if(error){
    setError(error.data.message);
    console.log(`error ${JSON.stringify(error.data.message)}`)
   }
   else{
    //data.token --> has token value
    props.setToken(data.token);
    console.log(`error ${JSON.stringify(data.token)}`)
   }
  };

  const onUserInput = (e) => {
    if(errorMsg){
        setError(null)
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  
  return (
    <div>
      <h2>Register</h2>
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
