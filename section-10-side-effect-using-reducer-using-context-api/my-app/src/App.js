import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./MainHeader/MainHeader";
import Login from "./Login/Login";
import Home from "./Home/Home";
import React, { useState, useEffect, useContext } from "react";
import AuthContext from "./store/authentication-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader></MainHeader>
      {ctx.isLogined ? <Home></Home> : <Login></Login>}
    </React.Fragment>
  );
}

export default App;
