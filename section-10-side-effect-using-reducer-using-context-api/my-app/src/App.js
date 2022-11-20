import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./MainHeader/MainHeader";
import Login from "./Login/Login";
import Home from "./Home/Home";
import { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", "1")
  }

  const handleLogout = () => {
    setIsLogin(false);
    localStorage.removeItem('isLogin')
  }

  useEffect(() => {
    if (localStorage.getItem("isLogin") == "1") {
      setIsLogin(true);
    }
  }, [isLogin]);
  return (
    <>
      <MainHeader isLogin={isLogin} onLogout={handleLogout}></MainHeader>
      {isLogin ? <Home></Home> : <Login onLogin={handleLogin}></Login>}
    </>
  );
}

export default App;
