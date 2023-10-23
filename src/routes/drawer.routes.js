import { Home } from "../modules";
import { Login } from "../modules";
import { Clients } from "../modules";
import { Feather } from "react-native-vector-icons";
import { CustomDrawer } from "../shared/components";
import { useNavigation } from "@react-navigation/native";
import { ConfigPrincipal } from "../modules";
import { TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
        drawerActiveTintColor: "black",
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
          headerRight: () => (
            <TouchableOpacity
              style={{ padding: 15 }}
              onPress={() => navigation.navigate("addClients")}
            >
              <Feather name="user-plus" size={22} color="white" />
            </TouchableOpacity>
          ),
          drawerLabelStyle: { color: "black" },
          drawerIcon: () => <Feather name="users" size={20} color="black" />,
        }}
      />

      <Drawer.Screen
        name="configPrincipal"
        component={ConfigPrincipal}
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
