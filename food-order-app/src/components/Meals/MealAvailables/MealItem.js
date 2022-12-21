import React, {useContext, useRef} from "react";
import Input from "../../UI/Input/Input";
import CartContext from "../../../store/CartContext";
import classes from './MealAvailables.module.css'

const MealItem = ({meal}) => {
  const cartContext = useContext(CartContext);
  const inputRef = useRef();

  const addItemToCartHandler = (item) => {
    console.log("ref:" + inputRef.current.id);
    let amount = inputRef.current.value;
    const addedItem = { ...item, amount: +amount };
    cartContext.addItemToCart(addedItem);
  };
  return (
    <div className={classes.item}>
      <div className={classes["item-info"]}>
        <p className={classes["item-name"]}>{meal.name}</p>
        <p className={classes["item-description"]}>{meal.description}</p>
        <p className={classes["item-price"]}>${meal.price}</p>
      </div>
      <div className={classes["item-info"]}>
        <p className={classes["item-amount"]}>
          Amount{" "}
          <Input
            ref={inputRef}
            className="item-input"
            input={{
              id: "amount" + meal.id,
              type: "number",
              min: "1",
              max: "5",
              defaultValue: "1",
            }}
          ></Input>
        </p>
        <button
          className={classes.btnAdd}
          onClick={() => {
            addItemToCartHandler(meal);
          }}
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default MealItem;
