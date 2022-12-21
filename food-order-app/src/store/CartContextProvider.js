import React, { useReducer } from "react";
import CartContext from "./CartContext";
import { DUMMY_MEALS } from "../components/Meals/MealAvailables/MealAvailables";

const defaultCartStaTe = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    var indexCartItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    var updatedItems;
    if (indexCartItem === -1) {
      updatedItems = state.items.concat(action.item);
    } else {
      let existedItem = state.items[indexCartItem];
      let updatedItem = {
        ...existedItem,
        amount: existedItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[indexCartItem] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    // id, if amount == 1 ? delete : amount -1
    var updatedItems = [...state.items];
    let indexExistedItem = state.items.findIndex(
      (item) => item.id === action.id
    );

    const updatedTotalAmount =
      state.totalAmount - state.items[indexExistedItem].price;

    if (state.items[indexExistedItem].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      let updatedItem = {
        ...state.items[indexExistedItem],
        amount: state.items[indexExistedItem].amount - 1,
      };
      updatedItems[indexExistedItem] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartStaTe;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartStaTe
  );

  const addItemToCart = (item) => {
    console.log("add");
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {
    console.log("remove");
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItemToCart: addItemToCart,
    removeItemFromCart: removeItemFromCart,
  };
  return (
    <CartContext.Provider value={cartContext}>
      <div>{props.children}</div>
    </CartContext.Provider>
  );
};

export default CartContextProvider;
