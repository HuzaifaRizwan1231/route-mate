import { createSlice } from "@reduxjs/toolkit";

export const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passenger: {
      email: "passenger@gmail.com",
      password: "123",
    },
  },
  reducers: {
    setPassenger: (state, action) => {
      state.passenger = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPassenger } = passengerSlice.actions;

export default passengerSlice.reducer;
