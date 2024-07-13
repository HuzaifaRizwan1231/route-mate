import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customer/customerSlice";

export default configureStore({
  reducer: {
    customer: customerReducer,
  },
});
