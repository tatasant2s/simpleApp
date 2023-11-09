import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "dataReducer",
  initialState: {
    data: "",
  },

  reducers: {
    setDataAction: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setDataAction } = dataSlice.actions;

export default dataSlice.reducer;
