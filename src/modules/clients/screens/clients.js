import { styles } from "../styles/clients_style";
import { useClients, useData } from "../../../store";
import { CardList, InputSearch } from "../../../shared/components";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
  FlatList,
  ScrollView,
} from "react-native";

export default function Clients() {
  const { data } = useData();
  const { clients } = useClients();

  function handleSearchData(value) {
    if (data === "") {
      return value;
    } else if (value.name.toLowerCase().includes(data.toLowerCase())) {
      return value;
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="height">
          <InputSearch
            outlineStyle={styles.inputSearchView}
            placeholder="Buscar"
            mode="outlined"
          />

          <View style={styles.listView}>
            <ScrollView>
              {clients
                .filter((value) => handleSearchData(value))
                .map((item, index) => (
                  <CardList key={index} cli={item} />
                ))}
            </ScrollView>
            {clients === "" && (
              <FlatList
                data={clients}
                renderItem={({ item }) => <CardList cli={item} />}
              />
            )}
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
