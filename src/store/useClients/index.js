import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
  name: "clientsReducer",
  initialState: {
    //form: {},
    clients: [
      {
        id: 1,
        name: "Waltinho PP",
        cpf: 47999834076,
        email: "waltinhocria@gmail.com",
        cel: 999458755,
        tel: 999458755,
        type: "Distribuidor",
      },
      {
        id: 2,
        name: "Barbixa ixa",
        cpf: 91773174088,
        email: "barbizinha@gmail.com",
        cel: 992657847,
        tel: 992657847,
        type: "Produtor",
      },
      {
        id: 3,
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
      state.clients.push({ ...action.payload, id: state.clients.length + 1 });
    },
    setUpdateAction: (state, action) => {
      state.clients[action.payload.id - 1] = { ...action.payload };
    },

    // setFormAction: (state, action) => {
    //   state.form = action.payload;
    // },
  },
});

export const { setClientsAction, setUpdateAction } = clientsSlice.actions;

export default clientsSlice.reducer;
