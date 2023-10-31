import "react-native-gesture-handler";
import store from "./src/store/redux";
import Routes from "./src/routes";
import { Provider } from "react-redux";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </Provider>
  );
}
