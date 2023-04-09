import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import FeedHeader from "./FeedHeader";
import FeedFooter from "./FeedFooter";
import db from "../../firebase";

import { doc, getDoc } from "firebase/firestore";
import { posts } from "./Dummy/data";
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
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState();

  const fetchUser = async () => {
    // console.log("am i working   2");
    const Ref = doc(db, "users", feed.userRef);
    const userSnap = await getDoc(Ref);
    // console.log("user data.................", userSnap.data());
    setUserData(userSnap.data());
  };
  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      fetchUser();
    }
  }, [userData]);
  return (
    <View>
      <FeedHeader userData={userData} />
      {/* {feed.picture.uri != "" ? (
        <Image style={styles.image} source={require("./img.jpg")} />
      ) : (
        <View className="py-4 px-2 shadow-inner bg-slate-300">
          <Text>{feed.caption}</Text>
        </View>
      )} */}
      {feed.caption != "" ? (
        <View className="py-4 px-3 shadow-inner  ">
          <Text>{feed.caption}</Text>
        </View>
      ) : (
        ""
      )}

      {feed.pictures[0] != "" ? (
        <Image style={styles.image} source={{ uri: feed.pictures[0] }} />
      ) : (
        ""
      )}

      <FeedFooter />
    </View>
  );
};

export default Feed;
