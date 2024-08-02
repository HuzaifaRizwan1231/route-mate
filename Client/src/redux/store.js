import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "./passenger/passengerSlice";
import driverReducer from "./driver/driverSlice";
import listingReducer from "./listing/listingSlice";

export default configureStore({
  reducer: {
    passenger: passengerReducer,
    driver: driverReducer,
    listing: listingReducer,
  },
});
