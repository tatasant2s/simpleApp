import { ImageBackground, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

export const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        contentContainerStyle={{
          height: "100%",
          backgroundColor: "#009e54",
          borderBottomEndRadius: 50,
        }}
        {...props}
      >
        <View style={{ padding: 10 }}>
          <ImageBackground
            style={{ height: 150 }}
            source={require("../../../assets/images/logo-branca.png")}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            paddingTop: 10,
            borderBottomEndRadius: 50,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
