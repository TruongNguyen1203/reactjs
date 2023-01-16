import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticate: false };
const authSlice = createSlice({
  name: "authenticate",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer