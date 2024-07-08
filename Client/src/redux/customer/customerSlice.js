import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phone: "",
  },
  reducers: {
    setCustomer: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCustomer } = customerSlice.actions;

export default customerSlice.reducer;
