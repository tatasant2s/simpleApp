import Home from "../modules/home/screens/home";
import Config from "../modules/config/screens/config";
import Login from "../modules/login/screens/login";
import Clients from "../modules/clients/screens/clients";
import { Feather } from "react-native-vector-icons";
import { CustomDrawer } from "../shared/components/drawer/customDrawer";
import { useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitle: "Home",
        headerTitleAlign: "center",
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#009e54" },
        drawerStyle: { borderBottomEndRadius: 50 },
        drawerActiveTintColor: "rgba(0, 0, 0, 0.65)",
      }}
    >
      <Drawer.Screen
        name="inicio"
        component={Home}
        options={{
          title: "Página Inicial",
          drawerLabelStyle: { color: "black" },
          drawerIcon: () => <Feather name="home" size={20} color="black" />,
        }}
      />

      <Drawer.Screen
        name="clients"
        component={Clients}
        options={{
          title: "Clientes",
          headerTitle: "Clientes",
          drawerLabelStyle: { color: "black" },
          drawerIcon: () => <Feather name="users" size={20} color="black" />,
        }}
      />

      <Drawer.Screen
        name="config"
        component={Config}
        options={{
          title: "Configurações",
          headerTitle: "Configurações",
          drawerLabelStyle: { color: "black" },
          drawerIcon: () => <Feather name="settings" size={20} color="black" />,
        }}
      />

      <Drawer.Screen
        name="logout"
        component={Login}
        options={{
          title: "Logout",
          headerShown: false,
          drawerLabelStyle: { color: "black" },
          drawerIcon: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="log-out" size={20} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
