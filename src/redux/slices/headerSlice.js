import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    title: "Default Title",
    buttons: [],
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setButtons: (state, action) => {
      state.buttons = action.payload;
    },
  },
});

export const { setTitle, setButtons } = headerSlice.actions;
export default headerSlice.reducer;
