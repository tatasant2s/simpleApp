import { View } from "react-native";
import { styles } from "./input_style";
import { Feather } from "react-native-vector-icons";
import { useState } from "react";
import { TextInput } from "react-native-paper";

export const Input = ({ secureTextEntry, ...props }) => {
  const [secure, setSecure] = useState(!!secureTextEntry);

  function handleOnPressEye() {
    setSecure(!secure);
  }

  return (
    <View style={styles.containerInput}>
      <TextInput
        theme={{ colors: { primary: "#009e54" } }}
        outlineStyle={styles.inputView}
        selectionColor="#87CEFA"
        secureTextEntry={secure}
        right={
          secureTextEntry && (
            <TextInput.Icon
              icon={() => (
                <Feather
                  name={secure ? "eye" : "eye-off"}
                  onPress={handleOnPressEye}
                  size={20}
                  color="#009e54"
                />
              )}
            />
          )
        }
        {...props}
      ></TextInput>
    </View>
  );
};
