import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    appLanguage: "en-US",
  },
  reducers: {
    changeAppLanguage: (state, action) => {
      state.appLanguage = action.payload;
    },
  },
});

export default configSlice.reducer;
export const { changeAppLanguage } = configSlice.actions;
