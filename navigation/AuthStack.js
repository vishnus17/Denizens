import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, OnboardingScreen, SplashScreen } from "../screens";
const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator initialRouteName={"Splash"}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
