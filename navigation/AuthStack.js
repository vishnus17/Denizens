import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
  OnboardingScreen,
  SplashScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  ChangePasswordScreen,
} from "../screens";
import BottomTabNav from "./BottomTabNav";

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
      <AuthStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStack.Screen name="BottomTabNav" component={BottomTabNav} />
    </AuthStack.Navigator>
  );
};

export default AuthStack;
