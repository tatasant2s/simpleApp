import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/useSelector";
import { setDataAction } from ".";

export const useData = () => {
  const dispatch = useDispatch();
  const { data } = useAppSelector((state) => state.dataReducer);

  function setData(currentData) {
    dispatch(setDataAction(currentData));
  }

  return { data, setData };
};
