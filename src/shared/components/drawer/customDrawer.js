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
          backgroundColor: "#009e54",
          borderBottomEndRadius: 50,
        }}
        {...props}
      >
        <View style={{ padding: 5, alignSelf: "stretch" }}>
          <ImageBackground
            resizeMode="contain"
            style={{ height: 120 }}
            source={require("../../../assets/images/logoBranca.png")}
          />
        </View>
        <View
          style={{
            paddingTop: 5,
            backgroundColor: "white",
            borderBottomEndRadius: 50,
          }}
        >
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
