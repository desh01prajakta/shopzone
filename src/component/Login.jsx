import { useLoginMutation } from "../redux/api";
import { useState } from "react";

function Login(props) {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const [errorMsg, setError] = useState(null);
  const [login] = useLoginMutation();
  
  const eventHandler = async(event) => {
    event.preventDefault();
    try{
   const {data, error} = await login(userInfo);
   
   if(error && error.data){
    setError(error.data)
    console.log("error", error)
   } else {
    props.setToken(data.token)
    console.log(`data ${JSON.stringify(data.token)}`)
    }
}  catch(error){
    console.error("An error occurred during login:", error);
    // Handle any unexpected errors here
  }
}
   const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    } setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

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
