import "./Login.css";
import { useEffect, useState, useReducer, useContext } from "react";
import AuthContext from '../store/authentication-context'

const emailReducer = (state, action) => {
  if(action.type == "USER_INPUT"){
    return {value: action.value, isValid: action.value.includes("@")}
  }

  return {value: " ", isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type == "USER_INPUT"){
    return {value: action.value, isValid: action.value.trim().length > 6 }
  }

  return {value: " ", isValid: false}
}
const Login = () => {
  const ctx = useContext(AuthContext);
  const [isFormValid, setIsFormValid] = useState(false);

  const handlerEmailChange = (e) => {
    dispatchEmail({type: "USER_INPUT", value: e.target.value})

  };

  const handlerPasswordChange = (e) => {
    dispatchPassword({type:"USER_INPUT", value: e.target.value})
  };
  const handleLogin = (e) => {
    e.preventDefault();
    ctx.handleLogin();
  };

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: false
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: false
  });

  const {isValid: isEmailValid} = emailState;
  const {isValid: isPasswordValid} = passwordState;


  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Check valid form");
      if ( isEmailValid && isPasswordValid) {
        console.log("true");
        setIsFormValid(true);
      }
    }, 500);

    return () => {
      console.log("ClEANUP");
      clearTimeout(identifier);
    }
  }, [isEmailValid, isPasswordValid]);


  return (
    <form className="login-form">
      <div className="input-control">
        <label>Email</label>
        <input type="email" name="email" onChange={handlerEmailChange} ></input>
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
