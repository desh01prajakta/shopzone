function Register() {
  const eventHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={eventHandler}>
        <label>
          Username
          <input type="text" placeholder="username" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="password" />
        </label>
        <label>
          Email
          <input type="text" placeholder="email" />
        </label>
        <label>
          First Name
          <input type="text" placeholder="first_name" />
        </label>
        <label>
          Last Name
          <input type="text" placeholder="lat_name" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
