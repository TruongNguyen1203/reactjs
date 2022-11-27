import "./MainHeader.css";
import AuthContext from "../store/authentication-context";
import { useContext } from "react";
const MainHeader = (props) => {
  const ctx = useContext(AuthContext)
  return (
    <div className="nav-bar">
      <h1>A Typical Page</h1>
      {ctx.isLogined && (
        <div>
          <a>Users</a>
          <a>Admin</a>
          <button onClick={props.onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default MainHeader;
