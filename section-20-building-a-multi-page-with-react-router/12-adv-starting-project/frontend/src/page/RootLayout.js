import MainNavigation from "../components/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../utils/auth";
const {
  Outlet,
  useNavigation,
  useLoaderData,
  useSubmit,
} = require("react-router-dom");

const RootLayout = () => {
  const navigation = useNavigation();
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      console.log(token);
    } else if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    } else {
      const tokenDuration = getTokenDuration();
      console.log(tokenDuration);
      setTimeout(() => {
        submit(null, { action: "/logout", method: "post" });
      }, tokenDuration);
    }
  }, [token, submit]);
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
