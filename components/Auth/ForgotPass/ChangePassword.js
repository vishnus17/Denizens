import { Text, View, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
import { useState, useEffect } from "react";

const ChangePassword = ({ navigation }) => {
  const [newPass, setNewPass] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);

  const handlePass = (text) => {
    setConfirmPass(text);
  };

  const handleSubmit = () => {
    newPass == confirmPass && newPass != "" && confirmPass != ""
      ? navigation.replace("LoginScreen")
      : "";
  };

  return (
    <View className="h-screen relative  ">
      <View className="flex flex-row h-18  items-center mx-2 mt-5">
        <TouchableOpacity>
          <IconButton
            icon="chevron-left"
            size={28}
            className="ml-1 flex-none"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <Text className="text-xl  text-center">Change Password</Text>
      </View>
      <View className="p-6 flex w-full flex-col h-full items-center justify-center absolute">
        <Text className="mb-7 text-xl">Reset password</Text>

        <View className="w-full">
          <TextInput
            className="p-3 bg-gray-200 active:border w-full mb-1 rounded-lg"
            onChangeText={setNewPass}
            value={newPass}
            placeholder="Enter new password"
            keyboardType="password"
            secureTextEntry={true}
          />
          {newPass == "" ? (
            <Text className="text-right text-orange-400">Cannot be empty</Text>
          ) : (
            ""
          )}
        </View>

        <View className="w-full">
          <TextInput
            className={
              newPass == confirmPass
                ? "p-3 bg-gray-200 active:border w-full my-2 rounded-lg"
                : "p-3 bg-gray-200 border border-red-400 w-full my-2 rounded-lg"
            }
            onChangeText={handlePass}
            value={confirmPass}
            placeholder="Retype new password"
            keyboardType="password"
            secureTextEntry={true}
          />

          {confirmPass == "" ? (
            <Text className="text-right text-orange-400">Cannot be empty</Text>
          ) : newPass != confirmPass ? (
            <Text className="text-right text-orange-400">
              both passwods must be equal
            </Text>
          ) : (
            ""
          )}
        </View>

        <TouchableOpacity
          className="w-full mt-7"
          onPress={newPass == null && confirmPass == null ? null : handleSubmit}
          // disabled={newPass == null && confirmPass == null}
        >
          <Text className="bg-blue-500 rounded-lg p-3 text-white text-lg text-center">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangePassword;
