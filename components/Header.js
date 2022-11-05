import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className=" h-16 flex-row content-center mt-2 w-full justify-center">
      <View className="flex-row items-center justify-center -ml-2">
        <Text className="h-24 w-16">Logo</Text>
        <Text className="mb-2-ml-2 text-base font-bold">MyID</Text>
      </View>
    </View>
  );
};

export default Header;
