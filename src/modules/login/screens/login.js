import { Input } from "../../../shared/components";
import { styles } from "../styles/login_style";
import { Feather } from "react-native-vector-icons";
import { Buttons } from "../../../shared/components";
import { Image, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.iconView}>
        <TouchableOpacity>
          <Feather name="settings" size={25} color="#009e54" />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.imageView}
        source={require("../../../assets/images/simple-agro.jpeg")}
      />
      <Input label="Usuário" mode="outlined" />
      <Input label="Senha" mode="outlined" />
      <Buttons> Login </Buttons>
    </View>
  );
}
