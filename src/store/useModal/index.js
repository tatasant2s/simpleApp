import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalReducer",
  initialState: {
    modal: false,
  },

  reducers: {
    setModalAction: (state, action) => {
      state.modal = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setModalAction } = modalSlice.actions;

export default modalSlice.reducer;
