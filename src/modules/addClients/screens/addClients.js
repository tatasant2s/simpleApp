import { styles } from "../styles/addClients_style";
import { useRef, useState } from "react";
import { useClients, useModal } from "../../../store";
import { Buttons, Input, SelectType } from "../../../shared/components";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import { ModalView } from "../../../shared/components";

export default function AddClients() {
  const { setClients } = useClients();
  const [value, setValue] = useState({});
  const nameInput = useRef(null);
  const cpfInput = useRef(null);
  const emailInput = useRef(null);
  const celInput = useRef(null);
  const telInput = useRef(null);
  const { modal, setModal } = useModal();

  function handleOnChangeText(event, key) {
    setValue((prevState) => ({ ...prevState, [key]: event }));
  }

  function handleCreateClients() {
    setModal(!modal);
    setClients(value);
    console.log("data:", value);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View>
          <Input
            theme={{ colors: { primary: "black" } }}
            underlineStyle={styles.underlineStyle}
            style={styles.inputView}
            label="Nome:"
            ref={nameInput}
            onSubmitEditing={() => cpfInput?.current?.focus()}
            onChangeText={(event) => handleOnChangeText(event, "name")}
          />
          <Input
            theme={{ colors: { primary: "black" } }}
            underlineStyle={styles.underlineStyle}
            style={styles.inputView}
            keyboardType="numeric"
            label="CPF/CNPJ:"
            ref={cpfInput}
            onSubmitEditing={() => emailInput?.current?.focus()}
            onChangeText={(event) => handleOnChangeText(event, "cpf")}
          />
          <Input
            theme={{ colors: { primary: "black" } }}
            underlineStyle={styles.underlineStyle}
            style={styles.inputView}
            keyboardType="email-address"
            label="Email:"
            ref={emailInput}
            onSubmitEditing={() => celInput?.current?.focus()}
            onChangeText={(event) => handleOnChangeText(event, "email")}
          />
          <Input
            theme={{ colors: { primary: "black" } }}
            underlineStyle={styles.underlineStyle}
            style={styles.inputView}
            keyboardType="numeric"
            label="Celular:"
            ref={celInput}
            onSubmitEditing={() => telInput?.current?.focus()}
            onChangeText={(event) => handleOnChangeText(event, "cel")}
          />
          <Input
            theme={{ colors: { primary: "black" } }}
            underlineStyle={styles.underlineStyle}
            style={styles.inputView}
            keyboardType="numeric"
            label="Telefone:"
            ref={telInput}
            onChangeText={(event) => handleOnChangeText(event, "tel")}
          />
          <SelectType
            onSelect={(selectedItem) => {
              handleOnChangeText(selectedItem, "type");
            }}
          />
          <ModalView visible={modal}>
            <Buttons onPress={handleCreateClients}> Cadastrar </Buttons>
          </ModalView>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
