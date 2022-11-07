import { View, Text, Image, StatusBar, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet } from "react-native";

const Header = () => {
  // className="bg-[#FAF9F9]
  // style={styles.content}
  // className="mt-0 border-[#DADADA] flex-1"
  return (
    <SafeAreaView className="h-12 bg-[#FAF9F9] shadow-lg">
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
    height: 64,
    backgroundColor: "#FAF9F9",

    // marginTop: StatusBar.currentHeight,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
