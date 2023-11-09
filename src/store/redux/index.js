import dataReducer from "../useData";
import modalReducer from "../useModal";
import clientsReducer from "../useClients";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: { dataReducer, modalReducer, clientsReducer },
});
