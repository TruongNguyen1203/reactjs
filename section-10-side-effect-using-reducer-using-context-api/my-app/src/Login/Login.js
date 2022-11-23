import "./Login.css";
import { useEffect, useState } from "react";
const Login = (props) => {
  const [enterEmail, setEnterEmail] = useState("");
  const [enterPassword, setEnterPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const handlerEmailChange = (e) => {
    setEnterEmail(e.target.value);
  };

  const handlerPasswordChange = (e) => {
    setEnterPassword(e.target.value);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("n");
    props.onLogin();
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Check valid form");
      if (enterEmail.includes("@") && enterPassword.length > 6) {
        console.log("true");
        setIsFormValid(true);
      }
    }, 500);

    return () => {
      console.log("ClEANUP");
      clearTimeout(identifier);
    }
  }, [enterEmail, enterPassword]);
  return (
    <form className="login-form">
      <div className="input-control">
        <label>Email</label>
        <input type="email" name="email" onChange={handlerEmailChange}></input>
      </div>
      <div className="input-control">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handlerPasswordChange}
        ></input>
      </div>
      <button type="submit" onClick={handleLogin} disabled={!isFormValid}>
        Login
      </button>
    </form>
  );
};

export default Login;
