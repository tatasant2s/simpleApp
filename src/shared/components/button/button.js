import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { styles } from "./button_style";

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
