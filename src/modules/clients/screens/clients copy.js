// import { styles } from "../styles/clients_style";
// import { useClients, useData } from "../../../store";
// import { CardList, InputSearch } from "../../../shared/components";
// import {
//   View,
//   FlatList,
//   Keyboard,
//   ScrollView,
//   KeyboardAvoidingView,
//   TouchableWithoutFeedback,
//   ActivityIndicator,
// } from "react-native";
// import { useState } from "react";

// export default function Clients() {
//   const { data } = useData();
//   const { clients } = useClients();
//   const [nextPage, setNextPage] = useState(false);

//   function handleSearchData(value) {
//     if (data === "") {
//       return value;
//     } else if (value.name.toLowerCase().includes(data.toLowerCase())) {
//       return value;
//     }
//   }

//   return (
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <View style={styles.container}>
//         <KeyboardAvoidingView behavior="height">
//           <InputSearch
//             outlineStyle={styles.inputSearchView}
//             placeholder="Buscar"
//             mode="outlined"
//           />

//           <View style={styles.listView}>
//             <ScrollView>
//               {clients
//                 .filter((value) => handleSearchData(value))
//                 .map((item, index) => (
//                   <CardList key={index} cli={item} />
//                 ))}
//             </ScrollView>
//             {clients === "" && (
//               <FlatList
//                 data={clients}
//                 keyExtractor={(item) => item.id}
//                 renderItem={({ item }) => <CardList cli={item} />}
//                 onEndReached={handleNextPage}
//                 ListFooterComponent={() =>
//                   nextPage && (
//                     <ActivityIndicator
//                       color="#009e54"
//                       size="large"
//                       style={{ marginBottom: 10 }}
//                     />
//                   )
//                 }
//               />
//             )}
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }
