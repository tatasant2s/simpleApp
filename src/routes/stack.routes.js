import DrawerRoutes from "./drawer.routes";
import { AddClients, Login } from "../modules";
import { Config } from "../modules";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="addClients"
        component={AddClients}
        options={{
          title: " Adicionar Cliente",
          statusBarColor: "#009e54",
          headerTintColor: "white",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#009e54" },
        }}
      />

      {/* <Stack.Screen
        name="config"
        component={Config}
        options={{
          title: "Configurações",
          headerTitle: "Configurações",
          headerTitleAlign: "center",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#009e54" },
        }}
      /> */}

      <Stack.Screen
        name="drawer"
        component={DrawerRoutes}
        options={{ headerShown: false, statusBarColor: "#009e54" }}
      />
    </Stack.Navigator>
  );
}
