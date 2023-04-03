import { useState } from "react";
import {Form} from 'react-router-dom'
import classes from './AuthForm.module.css'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const switchModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };
  return (
    <>
      <Form method='post' className={classes.form}>
        <h1>{isLogin ? "Login" : "Create new account"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email"></input>
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password"></input>
        </p>
        <div className={classes.action}>
          <button onClick={switchModeHandler} type='button'>
            {" "}
            {isLogin ? "Create new account" : "Login"}
          </button>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
};
export default AuthForm;
