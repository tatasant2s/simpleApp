import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./input_style";
import { Feather } from "react-native-vector-icons";
import { useController } from "react-hook-form";
import { forwardRef, useState } from "react";
import { TextInput, HelperText } from "react-native-paper";

export const Input = forwardRef(
  (
    { control, name, rules, secureTextEntry, errorMessage, error, ...props },
    ref
  ) => {
    const { field } = useController({ control, name, rules });
    const [secure, setSecure] = useState(!!secureTextEntry);

    function handleOnPressEye() {
      setSecure(!secure);
    }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.containerInput}>
          <TextInput
            error={!!errorMessage}
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
          {!!errorMessage && (
            <HelperText type="error" visible={!!errorMessage}>
              {errorMessage}
            </HelperText>
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
);
