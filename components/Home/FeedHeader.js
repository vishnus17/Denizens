import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import db from "../../firebase";

import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
const styles = StyleSheet.create({
  username: {
    fontWeight: "500",
    fontSize: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 20,
    marginRight: 8,
  },
  header: {
    flexDirection: "row",
    padding: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
});

const FeedHeader = ({ userData }) => {
  return (
    <View
      className="flex-row p-[7] align-middle justify-between h-max"
      style={styles.header}
    >
      <View className="flex-row align-middle" style={styles.headerLeft}>
        <TouchableOpacity className="rounded-full h-[48] w-[48] mr-[8] border border-gray-400 p-1">
          {userData.avathar != "" ? (
            <Image style={styles.avatar} source={{ uri: userData.avatar }} />
          ) : (
            <Image
              resizeMethod="resize"
              resizeMode="contain"
              className="h-full w-full"
              source={require("../../assests/images/EmptyProfile2.png")}
            />
          )}
        </TouchableOpacity>

        <Text className="text-base font-medium">
          {userData.firstname + " " + userData.lastname}
        </Text>
      </View>
      <Icon name="more-horizontal" size={24} />
    </View>
  );
};

export default FeedHeader;
