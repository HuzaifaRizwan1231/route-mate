import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "./passenger/passengerSlice";
import driverReducer from "./driver/driverSlice";

export default configureStore({
  reducer: {
    passenger: passengerReducer,
    driver: driverReducer,
  },
});
