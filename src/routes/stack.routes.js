import Login from "../modules/login/screens/login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerRoutes from "./drawer.routes";
import Config from "../modules/config/screens/config";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
