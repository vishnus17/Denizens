import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import BottomTabNav from "./BottomTabNav";

const Routes = () => {
  const logedIn = useSelector((state) => state.user.user.logedIn);
  const Routes = createNativeStackNavigator();
  return (
    <Routes.Navigator
      initialRouteName={logedIn ? "BottomTabNav" : "AuthStack"}
      screenOptions={{ headerShown: false }}
    >
      {!logedIn && <Routes.Screen name="AuthStack" component={AuthStack} />}
      {logedIn && (
        <Routes.Screen name="BottomTabNav" component={BottomTabNav} />
      )}
    </Routes.Navigator>
  );
};

export default Routes;
