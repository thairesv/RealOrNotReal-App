import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  username: "", // Add username to the initial state
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.username = action.payload;
    },

    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const { loginSuccess, logout } = loginSlice.actions;
export const selectIsLoggedIn = (state) => state.login.isLoggedIn;
export default loginSlice.reducer;
