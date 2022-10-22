import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  OnboardingScreen,
  SplashScreen,
  LoginScreen,
} from "../screens";

const AuthStack = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      initialRouteName={"Splash"}
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="HomeScreen" component={HomeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
