import { View } from "react-native";
import { Input } from "../../../shared/components";
import { styles } from "../styles/configLogin_style";
import { useForm } from "react-hook-form";

export default function ConfigLogin() {
  const { control } = useForm();

  return (
    <View style={styles.container}>
      <Input
        control={control}
        name="config_login"
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        label="URL:"
      />
    </View>
  );
}
