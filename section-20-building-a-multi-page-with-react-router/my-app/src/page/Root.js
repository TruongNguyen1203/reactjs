import classes from './Root.module.css'
const { default: MainNavigation } = require("../components/MainNavigation");
const { Outlet } = require("react-router-dom");
const RootPage = () => {
  return (
    <div>
      <MainNavigation></MainNavigation>
      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootPage;
