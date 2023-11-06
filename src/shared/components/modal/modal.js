import React from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { styles } from "./modal_style";
import { useModal } from "../../../store";
import { Feather } from "react-native-vector-icons";

export const ModalView = ({ ...props }) => {
  const { modal, setModal } = useModal();

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModal(!modal);
        }}
        {...props}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Feather name="check-circle" color="#009e54" size={60} />
            <Text style={styles.modalText}> Cadastrado com Sucesso! </Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModal(!modal)}
            >
              <Text style={styles.textStyle}> OK </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {props.children}
    </View>
  );
};
