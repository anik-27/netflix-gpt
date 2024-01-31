import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchBar: false,
  },
  reducers: {
    toggleShowGptSearchBar: (state) => {
      state.showGptSearchBar = !state.showGptSearchBar;
    },
  },
});

export const { toggleShowGptSearchBar } = gptSlice.actions;
export default gptSlice.reducer;
