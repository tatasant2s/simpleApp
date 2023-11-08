import { useRef } from "react";
import { styles } from "../styles/editClients_style";
import { useForm } from "react-hook-form";
import { useClients, useModal } from "../../../store";
import {
  Buttons,
  Input,
  ModalView,
  SelectType,
} from "../../../shared/components";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

export default function EditClients({ route }) {
  const cpfInput = useRef(null);
  const emailInput = useRef(null);
  const celInput = useRef(null);
  const telInput = useRef(null);
  const { setUpdate } = useClients();
  const { modal, setModal } = useModal();
  const { id, name, cpf, email, tel, cel, type } = route.params;
  const { handleSubmit, control } = useForm({
    defaultValues: { name, cpf, email, cel, tel, type },
  });

  function handleEditSave(data) {
    setModal(!modal);
    setUpdate({ ...data, id: id });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Input
          control={control}
          name="name"
          label="Nome:"
          defaultValue={name}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          style={styles.inputView}
          onSubmitEditing={() => cpfInput?.current?.focus()}
        />

        <Input
          control={control}
          ref={cpfInput}
          name="cpf"
          label="CPF/CNPJ:"
          keyboardType="numeric"
          defaultValue={cpf.toString()}
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          onSubmitEditing={() => emailInput?.current?.focus()}
        />

        <Input
          control={control}
          ref={emailInput}
          name="email"
          label="Email:"
          keyboardType="numeric"
          defaultValue={email}
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          onSubmitEditing={() => celInput?.current?.focus()}
        />

        <Input
          control={control}
          ref={celInput}
          name="cel"
          label="Celular:"
          keyboardType="numeric"
          defaultValue={cel.toString()}
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          onSubmitEditing={() => celInput?.current?.focus()}
        />

        <Input
          control={control}
          ref={telInput}
          name="tel"
          label="Telefone:"
          keyboardType="numeric"
          defaultValue={tel.toString()}
          style={styles.inputView}
          theme={{ colors: { primary: "black" } }}
          underlineStyle={styles.underlineStyle}
          onSubmitEditing={() => celInput?.current?.focus()}
        />

        <SelectType control={control} name="type" defaultValue={type} />
        <ModalView visible={modal}>
          <View style={styles.buttons}>
            <Buttons onPress={handleSubmit(handleEditSave)}>Salvar</Buttons>
          </View>
        </ModalView>
      </View>
    </TouchableWithoutFeedback>
  );
}
