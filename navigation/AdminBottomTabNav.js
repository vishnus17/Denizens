import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { HomeScreen, Post, ProfileScreen } from "../screens";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Header from "../components/Header";
const Tab = createMaterialBottomTabNavigator();

const AdminBottomTabNav = () => {
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
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="add-circle" size={24} color={color}></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
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

export default AdminBottomTabNav;
const style = {};
