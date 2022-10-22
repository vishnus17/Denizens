import { View, Text, Button } from "react-native";
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
        <Button onPress={onButtonClick} title="Get Started" />
      </View>
    </View>
  );
};

export default Onboarding;
