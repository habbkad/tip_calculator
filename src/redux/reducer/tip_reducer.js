import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

export const tipSlice = createSlice({
  name: "tip",
  initialState: {
    tip: 0,
    total: 0,
    reset: false,
  },
  reducers: {
    set_tip: (state, action) => {
      if (action.payload == Infinity) {
        state.tip = 0;
      }
      state.tip = action.payload;
    },

    set_Total: (state, action) => {
      if (action.payload == Infinity) {
        state.total = 0;
      }
      state.total = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set_tip, set_Total, setReset } = tipSlice.actions;

export default tipSlice.reducer;
