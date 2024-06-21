import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducer/course";

export const store = configureStore({
  reducer: {
    course: courseReducer,
  },
});
