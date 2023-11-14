import { createSlice } from "@reduxjs/toolkit";

export const clientsSlice = createSlice({
  name: "clientsReducer",
  initialState: {
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
        email: "frescurinha@gmail.com",
        cel: 992657847,
        tel: 992657847,
        type: "Produtor",
      },
      {
        id: 3,
        name: "Alexandre",
        cpf: 35337268007,
        email: "alexandre@gmail.com",
        cel: 999568234,
        tel: 999568234,
        type: "Cooperado",
      },
      {
        id: 4,
        name: "João do Grau",
        cpf: 566999626,
        email: "grau@gmail.com",
        cel: 356566566,
        tel: 356566566,
        type: "Distribuidor",
      },
      {
        id: 5,
        name: "Malafaias",
        cpf: 354665656,
        email: "malafaias@gmail.com",
        cel: 365656546,
        tel: 365656546,
        type: "Produtor",
      },
      {
        id: 6,
        name: "Jerumeia",
        cpf: 6889852656,
        email: "jerumeia@gmail.com",
        cel: 8922544545,
        tel: 8922544545,
        type: "Cooperado",
      },
      {
        id: 7,
        name: "Fulano de Tal",
        cpf: 3565887895,
        email: "jerumeia@gmail.com",
        cel: 4565862658,
        tel: 4565862658,
        type: "Distribuidor",
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
    setDeleteAction: (state, action) => {
      state.clients = state.clients
        .filter((cli, i) => i + 1 !== action.payload)
        .map((cli, i) => {
          return { ...cli, id: i + 1 };
        });
    },
  },
});

export const { setClientsAction, setUpdateAction, setDeleteAction } =
  clientsSlice.actions;

export default clientsSlice.reducer;
