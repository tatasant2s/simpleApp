import { TextInput } from "react-native-paper";
import { View } from "react-native";
import { styles } from "./input_style";

export const Input = (props) => {
  const { children, ...res } = props;

  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.view}
        theme={{ colors: { primary: "#009e54" } }}
        outlineStyle={styles.inputView}
        selectionColor="#87CEFA"
        cursorColor="#87CEFA"
        {...res}
      >
        {children}
      </TextInput>
    </View>
  );
};
