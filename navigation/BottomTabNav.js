import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, ProfileScreen } from "../screens";
import { Post } from "../screens/Actions";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
import { useSelector } from "react-redux";
import ProfileStack from "./ProfileStack";

const BottomTabNav = () => {
  const Tab = createMaterialBottomTabNavigator();
  const logedIn = useSelector((state) => state.user.user.logedIn);
  const roles = useSelector((state) => state.user.user.roles);
  // console.log("from bottomTabNav", logedIn, role);
  return (
    <Tab.Navigator
      labeled={true}
      inactiveColor="#000000"
      activeColor="#0D4F9C"
      shifting={true}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarLabel: ({ focused }) =>
          //   focused ? <Text ClassName="text-black font-bold">Home</Text> : "",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      {logedIn && roles.includes("post:create-post") === true && (
        <Tab.Screen
          name="Post"
          component={Post}
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="add-circle" size={24} color={color}></Ionicons>
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
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
