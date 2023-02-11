import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    data: {},
  },
  reducers: {
    userDataInstallments: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { userDataInstallments } = userDataSlice.actions;
export default userDataSlice.reducer;
