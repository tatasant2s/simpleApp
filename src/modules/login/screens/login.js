import { Input } from "../../../shared/components";
import { styles } from "../styles/login_style";
import { useForm } from "react-hook-form";
import { Feather } from "react-native-vector-icons";
import { Buttons } from "../../../shared/components";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Login() {
  const navigation = useNavigation();
  const { control } = useForm();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.iconView}>
          <TouchableOpacity onPress={() => navigation.navigate("config_login")}>
            <Feather name="settings" size={25} color="#009e54" />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.imageView}
          resizeMode="contain"
          source={require("../../../assets/images/LogoPadrao.png")}
        />
        <Input control={control} name="user" label="Usuário" mode="outlined" />
        <Input
          control={control}
          name="password"
          label="Senha"
          mode="outlined"
          secureTextEntry
        />

        <Buttons onPress={() => navigation.navigate("drawer")}> Login </Buttons>
      </View>
    </TouchableWithoutFeedback>
  );
}
