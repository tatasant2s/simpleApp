import { TextInput } from "react-native-paper";
import { styles } from "./input_style";
import { View } from "react-native";

export const Input = (props) => {
  const { children, ...res } = props;

  return (
    <View style={styles.containerInput}>
      <TextInput
        outlineStyle={styles.inputView}
        selectionColor="#87CEFA"
        {...res}
      >
        {children}
      </TextInput>
    </View>
  );
};
