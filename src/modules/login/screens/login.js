import { Input } from "../../../shared/components/input/input";
import { styles } from "../styles/login-style";
import { Buttons } from "../../../shared/components/button/button";
import { Image, TouchableOpacity, View } from "react-native";
import { Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();

  // function handleOnConfig() {
  //   navigation.navigate("config");
  // }

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
      <Input outlineStyle={styles.inputView} label="Usuário" mode="outlined" />
      <Input outlineStyle={styles.inputView} label="Senha" mode="outlined" />
      <Buttons> Login </Buttons>
    </View>
  );
}
