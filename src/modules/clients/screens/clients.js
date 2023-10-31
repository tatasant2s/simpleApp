import { styles } from "../styles/clients_style";
import { useClients } from "../../../store";
import { CardList, InputSearch } from "../../../shared/components";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";

export default function Clients() {
  const { clients } = useClients();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="height">
          <InputSearch
            outlineStyle={styles.inputSearchView}
            placeholder="Buscar"
            mode="outlined"
          />
          <View style={styles.flatListView}>
            <FlatList
              data={clients}
              renderItem={({ item }) => <CardList cli={item} />}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
