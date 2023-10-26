import { styles } from "../styles/clients_style";
import { useClients } from "../../../store/useClients/useClients";
import { InputSearch } from "../../../shared/components";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from "react-native";

export default function Clients() {
  const { clients } = useClients();
  //console.log(clients);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <InputSearch
            outlineStyle={styles.inputSearchView}
            placeholder="Buscar"
            mode="outlined"
          />
          <ScrollView>
            {clients.map((cl) => (
              <Text key={cl.name}>
                {cl.name} - {cl.type}
              </Text>
            ))}
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

/*
cpf, nome, tipo
*/
