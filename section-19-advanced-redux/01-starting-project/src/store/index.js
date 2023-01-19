import cartSlice from "./cart-slice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: uiSlice } = require("./ui-slice");

const store = configureStore({
  reducer: { ui: uiSlice.reducer , cart: cartSlice.reducer},
});

export default store;
