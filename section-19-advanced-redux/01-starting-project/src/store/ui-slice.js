import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isShowCart: false },
  reducers: {
    toggle(state) {
      state.isShowCart = !state.isShowCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
