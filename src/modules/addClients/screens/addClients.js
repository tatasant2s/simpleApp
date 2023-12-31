import { useRef } from "react";
import { styles } from "../styles/addClients_style";
import { useForm } from "react-hook-form";
import { Keyboard, View } from "react-native";
import { useClients, useModal } from "../../../store";
import { TouchableWithoutFeedback } from "react-native";
import {
  Buttons,
  Input,
  ModalView,
  SelectType,
} from "../../../shared/components";

export default function AddClients() {
  const { setClients } = useClients();
  const { modal, setModal } = useModal();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const cpfInput = useRef(null);
  const emailInput = useRef(null);
  const celInput = useRef(null);
  const telInput = useRef(null);

  function handleCreateClients(data) {
    setModal(!modal);
    setClients(data);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Input
          control={control}
          name="name"
          label="Nome:"
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          rules={{ required: "Por favor, informe um nome." }}
          errorMessage={errors.name?.message}
          onSubmitEditing={() => cpfInput?.current?.focus()}
        />

        <Input
          control={control}
          name="cpf"
          label="CPF/CNPJ:"
          ref={cpfInput}
          keyboardType="numeric"
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          rules={{ required: "Por favor, informe um CPF." }}
          errorMessage={errors.cpf?.message}
          onSubmitEditing={() => emailInput?.current?.focus()}
        />

        <Input
          control={control}
          name="email"
          label="Email:"
          ref={emailInput}
          keyboardType="numeric"
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          rules={{ required: "Por favor, informe um email." }}
          errorMessage={errors.email?.message}
          onSubmitEditing={() => celInput?.current?.focus()}
        />

        <Input
          control={control}
          name="cel"
          label="Celular:"
          style={styles.inputView}
          ref={celInput}
          keyboardType="numeric"
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          rules={{ required: "Por favor, informe um celular." }}
          errorMessage={errors.cel?.message}
          onSubmitEditing={() => telInput?.current?.focus()}
        />

        <Input
          control={control}
          name="tel"
          label="Telefone:"
          ref={telInput}
          keyboardType="numeric"
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          rules={{ required: "Por favor, informe um telefone." }}
          errorMessage={errors.tel?.message}
        />

        <SelectType control={control} name="type" />
        <ModalView visible={modal}>
          <View style={styles.buttons}>
            <Buttons onPress={handleSubmit(handleCreateClients)}>
              Cadastrar
            </Buttons>
          </View>
        </ModalView>
      </View>
    </TouchableWithoutFeedback>
  );
}
