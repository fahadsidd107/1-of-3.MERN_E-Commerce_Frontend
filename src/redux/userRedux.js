import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
currentUser: null,
isFetching: false,
error: false,
  },
  reducers: {
    loginStart: (state) => {},
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
