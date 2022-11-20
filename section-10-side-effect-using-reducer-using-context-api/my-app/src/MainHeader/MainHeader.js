import "./MainHeader.css";
const MainHeader = (props) => {
  return (
    <div className="nav-bar">
      <h1>A Typical Page</h1>
      {props.isLogin && (
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
