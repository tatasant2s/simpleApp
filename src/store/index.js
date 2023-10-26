import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./useClients";

export default configureStore({
  reducer: { clientsReducer },
});
