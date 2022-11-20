import "./Login.css";
const Login = (props) => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('n')
    props.onLogin();
  };
  return (
    <form className="login-form">
      <div className="input-control">
        <label>Email</label>
        <input type="email" name="email"></input>
      </div>
      <div className="input-control">
        <label>Password</label>
        <input type="password" name="password"></input>
      </div>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};

export default Login;
