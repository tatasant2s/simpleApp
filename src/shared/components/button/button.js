import { View } from "react-native";
import { styles } from "./button_style";
import { Button } from "react-native-paper";

export const Buttons = ({ ...props }) => {
  return (
    <View style={styles.containerButton}>
      <Button style={styles.buttonView} mode="contained" {...props}>
        {props.children}
      </Button>
    </View>
  );
};
