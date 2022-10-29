import { View, Text, TextInput } from "react-native";
import React from "react";
// import { Icon } from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Input = ({ label, iconName, placeholder, secure }) => {
  return (
    <View className="flex flex-col gap-2  ">
      <Text className="text-base font-normal">{label}</Text>
      <View className="flex flex-row bg-gray-100 w-auto items-center p-2 border-gray border rounded-md">
        <MaterialCommunityIcons
          name={iconName}
          size={19}
          color={"#7978B5"}
          style={{ fontWeight: "400" }}
        />
        <TextInput
          placeholder={placeholder}
          keyboardType="email-address"
          className="ml-2"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default Input;
