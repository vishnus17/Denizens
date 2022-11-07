import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, Post, ProfileScreen } from "../screens";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      labeled={true}
      inactiveColor="#000000"
      activeColor="#0D4F9C"
      shifting={true}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          // tabBarLabel: ({ focused }) =>
          //   focused ? <Text ClassName="text-black font-bold">Home</Text> : "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
const style = {};
