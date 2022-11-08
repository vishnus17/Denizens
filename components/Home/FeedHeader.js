import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

const styles = StyleSheet.create({
  username: {
    fontWeight: "500",
    fontSize: 16,
  },
  avatar: {
    width: 40,
    height: 40,
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

const FeedHeader = ({ avatar, username }) => {
  return (
    <View
      className="flex-row p-[7] align-middle justify-between h-max"
      style={styles.header}
    >
      <View className="flex-row align-middle" style={styles.headerLeft}>
        <Image style={styles.avatar} source={avatar} />
        <Text className="text-base font-medium">{username}</Text>
      </View>
      <Icon name="more-horizontal" size={24} />
    </View>
  );
};

export default FeedHeader;
