import "react-native-gesture-handler";
import Routes from "./src/routes";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}
