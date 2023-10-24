import { styles } from "../styles/clients_style";
import { InputSearch } from "../../../shared/components";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";

export default function Clients() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <InputSearch
            outlineStyle={styles.inputSearchView}
            placeholder="Buscar"
            mode="outlined"
          />
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
