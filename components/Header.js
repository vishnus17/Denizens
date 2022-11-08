import {
  View,
  Text,
  Image,
  StatusBar,
  Platform,
  SafeAreaView,
} from "react-native";

import React from "react";
import { StyleSheet } from "react-native";

const Header = () => {
  // className="bg-[#FAF9F9]
  // style={styles.content}
  // className="mt-0 border-[#DADADA] flex-1"
  return (
    <SafeAreaView style={styles.content}>
      <View className="flex-1 justify-center align-middle">
        <Text className="text-center border-">Denizens</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    justifyContent: "center",
    height: 58,
    backgroundColor: "#FAF9F9",

    // marginTop: StatusBar.currentHeight,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
