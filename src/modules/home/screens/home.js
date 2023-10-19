import { View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

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
