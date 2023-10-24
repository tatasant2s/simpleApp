import { View } from "react-native";
import { Input } from "../../../shared/components";
import { styles } from "../styles/configLogin_style";

export default function ConfigLogin() {
  return (
    <View style={styles.container}>
      <Input
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        label="URL:"
      />
    </View>
  );
}
