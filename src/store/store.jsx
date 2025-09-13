import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../landingPage/reducer/counterReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
