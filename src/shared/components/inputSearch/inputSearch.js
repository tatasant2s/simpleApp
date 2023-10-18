import { TextInput } from "react-native-paper";
import { View } from "react-native";
import { Feather } from "react-native-vector-icons";
import { styles } from "./inputSearch_style";

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
