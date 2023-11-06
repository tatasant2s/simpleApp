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
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
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
        rules={{ required: "Por favor, informe um nome." }}
        errorMessage={errors.name?.message}
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
        rules={{ required: "Por favor, informe um CPF." }}
        errorMessage={errors.cpf?.message}
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
        rules={{ required: "Por favor, informe um email." }}
        errorMessage={errors.email?.message}
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
        rules={{ required: "Por favor, informe um celular." }}
        errorMessage={errors.cel?.message}
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
        rules={{ required: "Por favor, informe um telefone." }}
        errorMessage={errors.tel?.message}
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
