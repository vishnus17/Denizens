import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
const { width } = Dimensions.get("window");
const SIZE = width;
const styles = StyleSheet.create({
  image: {
    width: SIZE,
    height: SIZE,
    resizeMode: "cover",
  },
});

const Feed = ({ feed }) => {
  return (
    <View>
      <FeedHeader avatar={feed.avatar} username={feed.user} />
      {/* {feed.picture.uri != "" ? (
        <Image style={styles.image} source={require("./img.jpg")} />
      ) : (
        <View className="py-4 px-2 shadow-inner bg-slate-300">
          <Text>{feed.caption}</Text>
        </View>
      )} */}
      <View className="py-4 px-3 shadow-inner  ">
        <Text>{feed.caption}</Text>
      </View>
      {feed.picture.uri != "" ? (
        <Image style={styles.image} source={feed.picture.uri} />
      ) : (
        ""
      )}

      <FeedFooter />
    </View>
  );
};

export default Feed;
