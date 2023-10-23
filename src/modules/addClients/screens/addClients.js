import { View } from "react-native";
import { Input, SelectType } from "../../../shared/components";
import { styles } from "../styles/addClients_style";

export default function AddClients() {
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Nome:"
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="CPF/CNPJ:"
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Email:"
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Celular:"
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Telefone:"
        />
        <SelectType />
      </View>
    </View>
  );
}
