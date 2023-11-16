import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/useSelector";
import {
  setClientsAction,
  setUpdateAction,
  setDeleteAction,
  setFilterAction,
} from ".";

export const useClients = () => {
  const dispatch = useDispatch();
  const { clients, filterData } = useAppSelector(
    (state) => state.clientsReducer
  );

  function setClients(currentClients) {
    dispatch(setClientsAction(currentClients));
  }

  function setFilter(currentFilter) {
    dispatch(setFilterAction(currentFilter));
  }

  function setUpdate(currentClients) {
    dispatch(setUpdateAction(currentClients));
  }

  function setDelete(currentClients) {
    dispatch(setDeleteAction(currentClients));
  }

  return {
    clients,
    filterData,
    setClients,
    setFilter,
    setUpdate,
    setDelete,
  };
};
