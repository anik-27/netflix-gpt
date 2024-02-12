import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchBar: false,
    gptMoviesName: null,
    gptMoviesData: null,
  },
  reducers: {
    toggleShowGptSearchBar: (state) => {
      state.showGptSearchBar = !state.showGptSearchBar;
    },
    addGptMoviesName: (state, action) => {
      state.gptMoviesName = action.payload;
    },
    addGptMoviesData: (state, action) => {
      state.gptMoviesData = action.payload;
    },
    clearGptMoviesName: (state) => {
      state.gptMoviesName = null;
    },
    clearGptMoviesdata: (state) => {
      state.gptMoviesData = null;
    },
  },
});

export const {
  toggleShowGptSearchBar,
  addGptMoviesName,
  addGptMoviesData,
  clearGptMoviesName,
  clearGptMoviesdata,
} = gptSlice.actions;
export default gptSlice.reducer;
