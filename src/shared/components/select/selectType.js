import { useState } from "react";
import { View } from "react-native";
import { PaperSelect } from "react-native-paper-select";
import { styles } from "./selectType_style";
import SelectDropdown from "react-native-select-dropdown";
import { Feather } from "react-native-vector-icons";

export const SelectType = () => {
  const items = ["Produtor", "Cooperado", "Distribuidor"];

  return (
    <View style={styles.container}>
      <SelectDropdown
        data={items}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        defaultButtonText={"Tipo de cliente"}
        buttonStyle={styles.buttonStyle}
        buttonTextStyle={{ color: "#706f6f", fontSize: 16 }}
        dropdownStyle={styles.dropDownStyle}
        renderDropdownIcon={(isOpened) => {
          return (
            <Feather
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={20}
            />
          );
        }}
      />
    </View>
  );
};
