import { StyleSheet, Text, View, Button } from "react-native";
import { Onboarding } from "../components/Onboard";
const OnboardingScreen = ({ navigation }) => {
  // const Stack = createNativeStackNavigator();

  // const onButtonClick = () => {
  //   navigation.replace("HomeScreen");
  // };
  // return (
  //   <View className="h-full  flex justify-center align-middle">
  //     <Text className="text-cyan-500 text-center">Onboarding</Text>
  //     <View
  //       className="w-1/2 flex justify-center align-middle"
  //       style={{ justifyContent: "center" }}
  //     >
  //       <Button onPress={onButtonClick} title="Get Started" />
  //     </View>
  //   </View>
  // );
  return <Onboarding navigation={navigation} />;
};

export default OnboardingScreen;

const styles = StyleSheet.create({});
