import { createSlice } from "@reduxjs/toolkit";

export const driverSlice = createSlice({
  name: "driver",
  initialState: {
    driver: {
      email: "driver@gmail.com",
      password: "123",
    },
  },
  reducers: {
    setDriver: (state, action) => {
      state.driver = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDriver } = driverSlice.actions;

export default driverSlice.reducer;
