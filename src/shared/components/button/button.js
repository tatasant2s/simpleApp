import { View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./button_style";
import { useNavigation } from "@react-navigation/native";

export const Buttons = ({ ...props }) => {
  return (
    <View style={styles.containerButton}>
      <Button style={styles.buttonView} mode="contained" {...props}>
        {props.children}
      </Button>
    </View>
  );
};
