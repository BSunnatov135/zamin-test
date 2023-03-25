import { createSlice } from "@reduxjs/toolkit";

export const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    data: {},
  },
  reducers: {
    userDetailsInstallments: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { userDetailsInstallments } = userDetailsSlice.actions;
export default userDetailsSlice.reducer;
