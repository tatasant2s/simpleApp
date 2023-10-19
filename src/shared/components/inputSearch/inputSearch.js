import { View } from "react-native";
import { styles } from "./inputSearch_style";
import { Feather } from "react-native-vector-icons";
import { TextInput } from "react-native-paper";

export const InputSearch = (props) => {
  const { children, ...res } = props;

  return (
    <View style={styles.container}>
      <TextInput
        right={
          <TextInput.Icon icon={() => <Feather name="search" size={20} />} />
        }
        {...res}
      >
        {children}
      </TextInput>
    </View>
  );
};
