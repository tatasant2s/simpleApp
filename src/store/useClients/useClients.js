import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/useSelector";
import { setClientsAction, setUpdateAction, setDeleteAction } from ".";

export const useClients = () => {
  const dispatch = useDispatch();
  const { clients } = useAppSelector((state) => state.clientsReducer);

  function setClients(currentClients) {
    dispatch(setClientsAction(currentClients));
  }

  function setUpdate(currentClients) {
    dispatch(setUpdateAction(currentClients));
  }

  function setDelete(currentClients) {
    dispatch(setDeleteAction(currentClients));
  }

  return {
    clients,
    setClients,
    setUpdate,
    setDelete,
  };
};
