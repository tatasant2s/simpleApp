import { View } from "react-native";
import { styles } from "./inputSearch_style";
import { useData } from "../../../store";
import { Feather } from "react-native-vector-icons";
import { TextInput } from "react-native-paper";

export const InputSearch = ({ ...props }) => {
  const { data, setData } = useData();

  function handleSubmit() {
    setData(data);
    //to.clear(); //limpar campo
  }

  return (
    <View style={styles.container}>
      <TextInput
        right={
          <TextInput.Icon
            onPress={handleSubmit}
            icon={() => <Feather name="search" size={20} />}
          />
        }
        ref={(e) => (to = e)}
        onSubmitEditing={handleSubmit}
        onChangeText={setData}
        {...props}
      >
        {props.children}
      </TextInput>
    </View>
  );
};
