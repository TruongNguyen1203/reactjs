import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0, isChanged: false },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((x) => x.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity += 1;
        existingItem.total += newItem.price;
      }
      state.totalQuantity++;
      state.isChanged = true;
    },
    removeItemFromCart(state, action) {
      const existingItem = state.items.find((x) => x.id === action.payload);

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((x) => x.id !== existingItem.id);
      } else {
        existingItem.quantity -= 1;
        existingItem.total -= existingItem.price;
      }

      state.totalQuantity -= 1;
      state.isChanged = true;
    },
    replaceCart(state, action) {
        console.log('payload: ' + JSON.stringify(action.payload))
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
  },
});

export const senCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending request...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-56668-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data fail!");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Add to cart successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Something went wrong when send request!",
        })
      );
    }
  };
};

export const fetchCart = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-56668-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );
      if (!response.ok) {
        throw new Error("Sending cart data fail!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const data = await fetchData();
      console.log('cart datta :' + JSON.stringify(data))
      dispatch(cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity
      }));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Something went wrong when fetch cart!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
