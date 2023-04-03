import MainNavigation from "../components/MainNavigation";
const { Outlet, useNavigation } = require("react-router-dom");

const RootLayout = () => {
  const navigation = useNavigation();
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
