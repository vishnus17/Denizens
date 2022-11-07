import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useState } from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
  actions: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  username: {
    fontWeight: "500",
    fontSize: 16,
  },
  leftActions: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 16,
  },
  caption: {
    marginLeft: 16,
    marginBottom: 8,
  },
  likes: {
    marginLeft: 16,
    marginBottom: 16,
    fontWeight: "500",
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

const FeedFooter = ({ likes, caption, key }) => {
  const [liked, setLiked] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const toggleLike = () => setLiked(!liked);
  return (
    <View className="border-b border-[#DADADA]">
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={toggleLike}>
            <MaterialCommunityIcons
              name={liked ? "thumb-up" : "thumb-up-outline"}
              style={styles.icon}
              size={24}
              color={liked ? "blue" : "black"}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="message-circle" size={24} style={styles.icon} />
            {/* <Icon name="send" size={24} style={styles.icon} /> */}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            setBookmark(!bookmark);
          }}
        >
          <Ionicons
            name={bookmark ? "bookmark" : "bookmark-outline"}
            size={24}
          ></Ionicons>
        </TouchableOpacity>
      </View>
      {/* <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.likes}>{`${likes} likes`}</Text> */}
    </View>
  );
};

export default FeedFooter;
