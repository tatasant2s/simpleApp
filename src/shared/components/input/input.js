import { View } from "react-native";
import { styles } from "./input_style";
import { Feather } from "react-native-vector-icons";
import { TextInput } from "react-native-paper";
import { forwardRef, useState } from "react";

export const Input = forwardRef(({ secureTextEntry, ...props }, ref) => {
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
        ref={ref}
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
      />
    </View>
  );
});
