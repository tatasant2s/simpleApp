import { useDispatch } from "react-redux";
import { useAppSelector } from "../useSelector";
import { setClientsAction } from ".";

export const useClients = () => {
  const dispatch = useDispatch();
  const { clients } = useAppSelector((state) => state.clientsReducer);

  function setClients(currentClients) {
    dispatch(setClientsAction(currentClients));
  }

  return {
    clients,
    setClients,
  };
};
