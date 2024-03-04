import { configureStore } from "@reduxjs/toolkit";
import producsReducers from "./productSlice";
export const store = configureStore({
  reducer: {
    products: producsReducers,
  },
});
