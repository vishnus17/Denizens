import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HomeScreen = () => {
  const onButtonClick = () => {
    AsyncStorage.removeItem("@viewedOnboarding");
  };
  return (
    <SafeAreaView className="h-full flex justify-center align-middle">
      <View>
        <Text className="text-center">Home</Text>
      </View>
      <View>
        <Button onPress={onButtonClick} title="refresh App" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
