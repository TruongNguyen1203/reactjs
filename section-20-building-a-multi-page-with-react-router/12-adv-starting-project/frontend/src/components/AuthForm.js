import { Form, useSearchParams, Link, useActionData, useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [searchParameters] = useSearchParams();
  const isLogin = searchParameters.get("mode") === "login";
  const data = useActionData();
  const navigate = useNavigate();
  const isSubmitting = navigate.isSubmitting;
  return (
    <>
      <Form method="POST" className={classes.form}>
        <h1>{isLogin ? "Login" : "Create new account"}</h1>
        <ul>
          {data &&
            data.errors &&
            Object.values(data.errors).map((err) => <li>{err}</li>)}
        </ul>

        <p>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email"></input>
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password"></input>
        </p>
        <div className={classes.action}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new account" : "Login"}
          </Link>
          <button disabled={isSubmitting}>Save</button>
        </div>
      </Form>
    </>
  );
};
export default AuthForm;
