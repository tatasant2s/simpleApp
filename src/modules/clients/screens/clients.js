import { View } from "react-native";
import { styles } from "../styles/clients_style";
import { InputSearch } from "../../../shared/components";

export default function Clients() {
  return (
    <View style={styles.container}>
      <InputSearch
        outlineStyle={styles.inputSearchView}
        placeholder="Buscar"
        mode="outlined"
      />
    </View>
  );
}
