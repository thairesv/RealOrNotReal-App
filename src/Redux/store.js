import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./Quiz/quizSlice"; // Update path if necessary
import loginReducer from "./loginSlice";

const store = configureStore({
  reducer: {
    quiz: quizReducer,
    login: loginReducer,
  },
});

export default store;
