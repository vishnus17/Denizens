import { View, Text, StatusBar } from "react-native";
import React from "react";
import Feed from "./Feed";
import Header from "../Header";
import { posts as feeds } from "./Dummy/data";
import { ScrollView } from "react-native-gesture-handler";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";

const Home = () => {
  const items = feeds.map((feed) => ({
    feed,
  }));
  const state = useSelector((state) => state.reducer);
  console.log(state);
  // const users = collection(db, "users");
  // console.log(users);
  // const querySnapshot = getDocs(users);
  // console.log(querySnapshot);
  // querySnapshot.then((snapshot) => {
  //   console.log("i", snapshot.docs[0].data());
  // });
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark" />
      <Header />
      <ScrollView
        pinchGestureEnabled={false}
        showsVerticalScrollIndicator={false}
      >
        {items.map(({ feed }) => (
          <Feed key={feed.id} {...{ feed }} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
