import { View } from "react-native";
import { Button } from "react-native-paper";
import { styles } from "../styles/addClients_style";
import { useState } from "react";
import { useClients } from "../../../store/useClients/useClients";
import { Input, SelectType } from "../../../shared/components";

export default function AddClients() {
  const { setClients } = useClients();
  const [value, setValue] = useState({});

  function handleOnChangeText(event, key) {
    setValue((prevState) => ({ ...prevState, [key]: event }));
  }

  function handleCreateClients() {
    setClients(value);
    console.log(value);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Nome:"
          onChangeText={(event) => handleOnChangeText(event, "name")}
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="CPF/CNPJ:"
          onChangeText={(event) => handleOnChangeText(event, "cpf")}
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Email:"
          onChangeText={(event) => handleOnChangeText(event, "email")}
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Celular:"
          onChangeText={(event) => handleOnChangeText(event, "cel")}
        />
        <Input
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          label="Telefone:"
          onChangeText={(event) => handleOnChangeText(event, "tel")}
        />
        <SelectType
          onSelect={(selectedItem, index) => {
            setValue(selectedItem);
            console.log(selectedItem, index);
          }}
        />
        <Button onPress={handleCreateClients}> enviar</Button>
      </View>
    </View>
  );
}
