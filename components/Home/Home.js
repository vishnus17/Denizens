import { View, Text } from "react-native";
import React from "react";
import Header from "../Header";
import { StatusBar, ScrollView } from "react-native";
import Feed from "./Feed";
import { posts as feeds } from "./Dummy/data";
const Home = () => {
  const items = feeds.map((feed) => ({
    feed,
  }));
  return (
    <View className="h-full w-full  ">
      <StatusBar animated={true} />
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
