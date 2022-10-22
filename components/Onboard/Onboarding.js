import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

const Onboarding = ({ navigation }) => {
  const onButtonClick = () => {
    navigation.replace("LoginScreen");
  };
  return (
    <View className="h-full  flex justify-center align-middle">
      <Text className="text-center">Onboarding</Text>
      <View
        // className="w-1/2 flex justify-center align-middle"
        style={{ justifyContent: "center" }}
      >
        <TouchableOpacity className="mt-10">
          <Text
            className=" w-full bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center "
            onPress={onButtonClick}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;
