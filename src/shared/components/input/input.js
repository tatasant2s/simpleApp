import { View } from "react-native";
import { styles } from "./input_style";
import { Feather } from "react-native-vector-icons";
import { TextInput, HelperText } from "react-native-paper";
import { useController } from "react-hook-form";
import { forwardRef, useState } from "react";

export const Input = forwardRef(
  ({ control, name, rules, secureTextEntry, ...props }, ref) => {
    const { field } = useController({ control, name, rules });
    const [secure, setSecure] = useState(!!secureTextEntry);

    function handleOnPressEye() {
      setSecure(!secure);
    }

    return (
      <View style={styles.containerInput}>
        <TextInput
          onChangeText={field.onChange}
          theme={{ colors: { primary: "#009e54" } }}
          outlineStyle={styles.inputView}
          secureTextEntry={secure}
          ref={ref}
          right={
            secureTextEntry && (
              <TextInput.Icon
                icon={() => (
                  <Feather
                    name={secure ? "eye-off" : "eye"}
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
  }
);
