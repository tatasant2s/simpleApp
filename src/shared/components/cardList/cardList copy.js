// import { styles } from "./cardList_style";
// import { Feather } from "react-native-vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { Animated, Text, TouchableOpacity, View } from "react-native";
// import { Swipeable } from "react-native-gesture-handler";

// export const CardList = ({ cli }) => {
//   const navigation = useNavigation();

//   function handleEdit() {
//     navigation.navigate("edit_clients", {
//       id: cli.id,
//       name: cli.name,
//       cpf: cli.cpf,
//       email: cli.email,
//       cel: cli.cel,
//       tel: cli.tel,
//       type: cli.type,
//     });
//   }

//   function handleRightActions(progress, dragX) {
//     const scale = dragX.interpolate({
//       inputRange: [-55, 100],
//       outputRange: [1, 0],
//       extrapolate: "clamp",
//     });

//     return (
//       <TouchableOpacity
//         style={[styles.rightAction, { transform: [{ scale }] }]}
//       >
//         <View style={{ borderColor: "black", borderWidth: 1 }}>
//           <Feather name="trash" color="black" size={30} />
//         </View>
//       </TouchableOpacity>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Swipeable renderRightActions={handleRightActions}>
//         <View style={styles.viewClients}>
//           {/* <Text> id: {cli.id} </Text> */}
//           <Text style={styles.text}> Nome: {cli.name}</Text>
//           <Text> CPF/CNPJ: {cli.cpf} </Text>
//           <Text> Tipo: {cli.type} </Text>
//           <TouchableOpacity onPress={handleEdit} style={styles.editClients}>
//             <Feather name="edit" size={25} />
//           </TouchableOpacity>
//         </View>
//       </Swipeable>
//     </View>
//   );
// };
