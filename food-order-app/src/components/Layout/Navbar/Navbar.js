import React, { useContext, useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Navbar.module.css";
import CartContext from "../../../store/CartContext";
const Navbar = (props) => {
  const cartContext = useContext(CartContext);
  const [isHighlightCart, setIsHighlightCart] = useState(false);

  const totalItems = cartContext.items.reduce(
    (total, items) => total + items.amount,
    0
  );
  const btnAnimation = `${classes.button} ${
    isHighlightCart ? classes.bump : " "
  }`;

  const items = cartContext.items;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsHighlightCart(true);

    const timeOutCart = setTimeout(() => {
      setIsHighlightCart(false);
    }, 300);

    return () => {
      clearTimeout(timeOutCart);
    };
  }, [items]);
  return (
    <div className={classes["nav-bar"]}>
      <h1>ReactMeals</h1>
      <button className={btnAnimation} onClick={props.onClick}>
        <ShoppingCartIcon />
        <span>Your cart</span>
        <span className={classes.count}>{totalItems}</span>
      </button>
    </div>
  );
};

export default Navbar;
