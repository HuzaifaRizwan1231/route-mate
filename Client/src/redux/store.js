import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "./passenger/passengerSlice";

export default configureStore({
  reducer: {
    passenger: passengerReducer,
  },
});
