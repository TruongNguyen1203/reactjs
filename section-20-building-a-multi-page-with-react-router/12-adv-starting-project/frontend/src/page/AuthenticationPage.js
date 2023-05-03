import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const AuthenticationPage = () => {
  return <AuthForm />;
};

export default AuthenticationPage;

export async function action({ request }) {
  const seachParams = new URL(request.url).searchParams;
  const mode = seachParams.get("mode") || "login";

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status == 422 || response.status == 401) {
    return response;
  }

  if (!response.ok) {
    return json({ message: "Could not authenticate user", status: 500 });
  }

  var resData = await response.json();
  var token = resData.token;
  localStorage.setItem('token', token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1)
  localStorage.setItem('expiration', expiration.toISOString())
  return redirect("/");
}
