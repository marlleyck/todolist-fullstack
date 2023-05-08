import { createSlice } from "@reduxjs/toolkit";

const apiIsArrivedSlice = createSlice({
  name: "apiIsArrived",
  initialState: {
    value: false,
  },
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const apiIsArrivedReducer = apiIsArrivedSlice.reducer;
export const apiIsArrivedActions = apiIsArrivedSlice.actions;
