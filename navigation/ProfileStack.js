import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileScreen } from "../screens";
import { EditProfile } from "../components/Actions";
import React from "react";

const ProfileStack = () => {
  const ProfileStack = createNativeStackNavigator();
  return (
    <ProfileStack.Navigator
      initialRouteName={"ProfileScreen"}
      screenOptions={{ headerShown: false }}
    >
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      ></ProfileStack.Screen>
      <ProfileStack.Screen
        name="EditProfile"
        component={EditProfile}
      ></ProfileStack.Screen>
    </ProfileStack.Navigator>
  );
};

export default ProfileStack;
