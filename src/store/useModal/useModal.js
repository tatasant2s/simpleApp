import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/useSelector";
import { setModalAction } from ".";

export const useModal = () => {
  const dispatch = useDispatch();
  const { modal } = useAppSelector((state) => state.modalReducer);

  function setModal(currentModal) {
    dispatch(setModalAction(currentModal));
  }

  return { modal, setModal };
};
