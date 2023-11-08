import DrawerRoutes from "./drawer.routes";
import { Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AddClients, ConfigLogin, EditClients, Login } from "../modules";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  //const { setClients } = useClients();

  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="config_login"
        component={ConfigLogin}
        options={{
          title: "Configurações",
          headerTitle: "Configurações",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#009e54" },
          headerRight: () => (
            <TouchableOpacity>
              <Feather name="check-circle" size={22} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="add_clients"
        component={AddClients}
        options={{
          statusBarColor: "#009e54",
          headerTitle: "Adicionar Cliente",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#009e54" },
        }}
      />

      <Stack.Screen
        name="edit_clients"
        component={EditClients}
        options={{
          statusBarColor: "#009e54",
          headerTitle: "Editar Dados",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#009e54" },
        }}
      />

      <Stack.Screen
        name="drawer"
        component={DrawerRoutes}
        options={{
          headerShown: false,
          statusBarColor: "#009e54",
        }}
      />
    </Stack.Navigator>
  );
}

//headerRight: () => (
// <TouchableOpacity
//   onPress={() => {
//     setClients(form);
//   }}
// >
//   <Feather name="check-circle" size={22} color="white" />
// </TouchableOpacity>
//),
