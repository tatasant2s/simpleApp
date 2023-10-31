import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/useSelector";
import { setClientsAction } from ".";

export const useClients = () => {
  const dispatch = useDispatch();
  const { clients } = useAppSelector((state) => state.clientsReducer);

  function setClients(currentClients) {
    dispatch(setClientsAction(currentClients));
  }

  /*function setForm(value, key) {
    dispatch(setFormAction({ ...form, [key]: value }));
  }*/

  return {
    clients,
    setClients,
    // form,
    // setForm,
  };
};
