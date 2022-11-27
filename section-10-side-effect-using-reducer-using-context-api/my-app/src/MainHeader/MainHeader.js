import "./MainHeader.css";
import AuthContext from "../store/authentication-context";
const MainHeader = (props) => {
  return (
    <div className="nav-bar">
      <h1>A Typical Page</h1>
      <AuthContext.Consumer>
        {(ctx) => {
          return (
            <div>
              {console.log("ctx: " + ctx.isLogined)}

              {ctx.isLogined && (
                <div>
                  <a>Users</a>
                  <a>Admin</a>
                  <button onClick={props.onLogout}>Logout</button>
                </div>
              )}
            </div>
          );
        }}
      </AuthContext.Consumer>
    </div>
  );
};

export default MainHeader;
