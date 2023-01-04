import { createSlice } from "@reduxjs/toolkit";

export const scrollFunctionSlice = createSlice({
  name: "scroll",
  initialState: {
    advertsRef: null,
    eventsRef: null,
    scrollSectionName: "",
  },
  reducers: {
    setScrollRefAdverts: (state, action) => {
      state.advertsRef = action.payload;
    },
    setScrollRefEvents: (state, action) => {
      state.eventsRef = action.payload;
    },
    setScrollSectionName: (state, action) => {
      state.scrollSectionName = action.payload;
    },
  },
});

export const { setScrollRefAdverts } = scrollFunctionSlice.actions;
export const { setScrollRefEvents } = scrollFunctionSlice.actions;
export const { setScrollSectionName } = scrollFunctionSlice.actions;

export default scrollFunctionSlice.reducer;
