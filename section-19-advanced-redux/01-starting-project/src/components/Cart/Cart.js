import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>

      {items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </ul>
      )}
      {
        items.length === 0 && <p>Empty Cart</p>
      }
    </Card>
  );
};

export default Cart;
