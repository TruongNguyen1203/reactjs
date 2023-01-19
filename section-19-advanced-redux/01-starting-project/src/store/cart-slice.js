import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalQuantity: 0 },
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
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
