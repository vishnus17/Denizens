import { View, Text, StatusBar } from "react-native";
import React from "react";
import Feed from "./Feed";
import Header from "../Header";
import { posts as feeds } from "./Dummy/data";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const items = feeds.map((feed) => ({
    feed,
  }));
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" />
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
