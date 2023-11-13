import { styles } from "./cardList_style";
import { Feather } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export const CardList = ({ cli }) => {
  const navigation = useNavigation();

  function handleEdit() {
    navigation.navigate("edit_clients", {
      id: cli.id,
      name: cli.name,
      cpf: cli.cpf,
      email: cli.email,
      cel: cli.cel,
      tel: cli.tel,
      type: cli.type,
    });
  }

  function rightAction(progress, dragX) {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity style={styles.rightAction}>
        <Animated.View
          style={[styles.iconView, { transform: [{ scale: scale }] }]}
        >
          <Feather name="trash" color="white" size={25} />
          <View>
            <Text style={styles.actionText}> Deletar </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <Swipeable
      renderRightActions={rightAction}
      containerStyle={styles.swipeable}
    >
      <View style={styles.containerView}>
        {/* <Text> id: {cli.id} </Text> */}
        <Text style={styles.containerText}> Nome: {cli.name} </Text>
        <Text> CPF/CNPJ: {cli.cpf} </Text>
        <Text> Tipo: {cli.type} </Text>
        <TouchableOpacity onPress={handleEdit} style={styles.editClients}>
          <Feather name="edit" size={25} />
        </TouchableOpacity>
      </View>
    </Swipeable>
  );
};
