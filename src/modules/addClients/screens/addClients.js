import { View } from "react-native";
import { useRef } from "react";
import { styles } from "../styles/addClients_style";
import { useForm } from "react-hook-form";
import { useClients, useModal } from "../../../store";
import {
  Buttons,
  Input,
  ModalView,
  SelectType,
} from "../../../shared/components";

export default function AddClients() {
  const { setClients } = useClients();
  const { handleSubmit, control } = useForm();
  const { modal, setModal } = useModal();
  const cpfInput = useRef(null);
  const emailInput = useRef(null);
  const celInput = useRef(null);
  const telInput = useRef(null);

  function handleCreateClients(data) {
    setModal(!modal);
    setClients(data);
    console.log(data);
  }

  return (
    <View style={styles.container}>
      <Input
        control={control}
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        name="name"
        label="Nome:"
        rules={{ required: true }}
        onSubmitEditing={() => cpfInput?.current?.focus()}
      />

      <Input
        control={control}
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        name="cpf"
        label="CPF/CNPJ:"
        ref={cpfInput}
        keyboardType="numeric"
        rules={{ required: true }}
        onSubmitEditing={() => emailInput?.current?.focus()}
      />

      <Input
        control={control}
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        name="email"
        label="Email:"
        ref={emailInput}
        keyboardType="numeric"
        rules={{ required: true }}
        onSubmitEditing={() => celInput?.current?.focus()}
      />

      <Input
        control={control}
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        name="cel"
        label="Celular:"
        ref={celInput}
        keyboardType="numeric"
        rules={{ required: true }}
        onSubmitEditing={() => telInput?.current?.focus()}
      />

      <Input
        control={control}
        theme={{ colors: { primary: "black" } }}
        underlineStyle={styles.underlineStyle}
        style={styles.inputView}
        name="tel"
        label="Telefone:"
        ref={telInput}
        keyboardType="numeric"
        rules={{ required: true }}
      />

      <SelectType control={control} name="type" rules={{ required: true }} />
      <ModalView visible={modal}>
        <View style={styles.buttons}>
          <Buttons onPress={handleSubmit(handleCreateClients)}>
            Cadastrar
          </Buttons>
        </View>
      </ModalView>
    </View>
  );
}
