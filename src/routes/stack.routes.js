import DrawerRoutes from "./drawer.routes";
import { Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native";
import { AddClients, ConfigLogin, Login } from "../modules";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ title: "" }}>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="configLogin"
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
        name="addClients"
        component={AddClients}
        options={{
          statusBarColor: "#009e54",
          headerTintColor: "white",
          headerTitle: "Adicionar Cliente",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#009e54" },
          headerRight: () => (
            <TouchableOpacity>
              <Feather name="check-circle" size={22} color="white" />
            </TouchableOpacity>
          ),
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
