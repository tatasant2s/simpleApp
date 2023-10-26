import SelectDropdown from "react-native-select-dropdown";
import { View } from "react-native";
import { styles } from "./selectType_style";
import { Feather } from "react-native-vector-icons";

export const SelectType = ({ ...props }) => {
  const items = ["Produtor", "Cooperado", "Distribuidor"];

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={items}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        defaultButtonText={"Tipo de Cliente"}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={{ color: "#706f6f", fontSize: 16 }}
        dropdownStyle={styles.dropDownStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <Feather
              name={isOpened ? "chevron-up" : "chevron-down"}
              size={20}
              color={"#444"}
            />
          );
        }}
        {...props}
      />
    </View>
  );
};
