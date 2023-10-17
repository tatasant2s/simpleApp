import { View } from "react-native";
import { Buttons } from "../../../shared/components/button/button";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";

export default function Home() {
  const { navigate } = useNavigation();

  function handleBack() {
    navigate("login");
  }

  return (
    <View>
      <Text>HOME</Text>
    </View>
    // <View>

    //   <Buttons onPress={handleBack}> Sair </Buttons>
    // </View>
  );
}
