import { styles } from "./cardList_style";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from "react-native-vector-icons";

export const CardList = ({ cli }) => {
  return (
    <View style={styles.container}>
      <View style={styles.viewClients}>
        <Text> Nome: {cli.name}</Text>
        <Text> CPF/CNPJ: {cli.cpf} </Text>
        <Text> Tipo: {cli.type} </Text>
      </View>
      <TouchableOpacity style={styles.editClients}>
        <Feather name="edit" size={25} />
      </TouchableOpacity>
    </View>
  );
};
