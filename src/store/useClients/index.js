import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
  name: "clientsReducer",
  initialState: {
    //form: {},
    clients: [
      {
        name: "Waltinho",
        cpf: 47999834076,
        email: "waltinhocria@gmail.com",
        cel: 999458755,
        tel: 999458755,
        type: "Distribuidor",
      },
      {
        name: "Barbixa",
        cpf: 91773174088,
        email: "barbizinha@gmail.com",
        cel: 992657847,
        tel: 992657847,
        type: "Produtor",
      },
      {
        name: "Alexandre",
        cpf: 35337268007,
        email: "Alexandre@gmail.com",
        cel: 999568234,
        tel: 999568234,
        type: "Cooperado",
      },
    ],
  },

  reducers: {
    setClientsAction: (state, action) => {
      state.clients.push(action.payload);
    },
    // setFormAction: (state, action) => {
    //   state.form = action.payload;
    // },
  },
});

export const { setClientsAction } = clientsSlice.actions;

export default clientsSlice.reducer;
