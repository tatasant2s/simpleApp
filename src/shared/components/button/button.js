import { View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "./button_style";
import { useNavigation } from "@react-navigation/native";

export const Buttons = (props) => {
  const { children, ...res } = props;
  const navigation = useNavigation();

  function handleOnPress() {
    navigation.navigate("drawer");
  }

  return (
    <View style={styles.containerButton}>
      <Button
        style={styles.buttonView}
        onPress={handleOnPress}
        mode="contained"
        {...res}
      >
        {children}
      </Button>
    </View>
  );
};
