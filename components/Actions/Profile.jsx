import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Logout } from "../../State/actions";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [image, setImage] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);

  // sign out
  const signOut = async () => {
    setButtonLoading(true);
    await dispatch(Logout());
    Alert.alert("you logedout successfully");

    setButtonLoading(false);
  };

  // on clicl edit
  const onEdit = () => {
    navigation.navigate("EditProfile");
  };

  return (
    <View className="h-full w-full bg-white flex flex-col items-center justify-between">
      <View className="w-full">
        <View className="flex flex-row items-center justify-between bg-[#FAF9F9] shadow-gray-400 border-1 h-[50] w-full">
          <TouchableOpacity
            className="p-2"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="chevron-back-outline" size={28}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity
            className="px-4 py-2 bg-cyan-600 mx-2 rounded-md"
            onPress={onEdit}
          >
            <Text className="text-base text-gray-50 font-semibold">Edit</Text>
          </TouchableOpacity>
        </View>

        <View className="flex flex-col items-center justify-center mt-10">
          <View className="flex flex-row    w-full items-center justify-center p-2">
            <TouchableOpacity className="border-2 border-orange-50 rounded-full">
              {user.userInfo.avathar === "" ? (
                <Image
                  resizeMode="contain"
                  style={{ borderRadius: 100, height: 120, width: 120 }}
                  source={require("../../assests/images/EmptyProfile2.png")}
                ></Image>
              ) : (
                <Image
                  style={{ borderRadius: 100, height: 120, width: 120 }}
                  source={{ uri: user.userInfo.avathar }}
                ></Image>
              )}
            </TouchableOpacity>
          </View>
          <Text className="text-base font-medium">
            {user.userInfo.firstname + " " + user.userInfo.lastname}
          </Text>
        </View>

        <View className="flex flex-col mt-8">
          <TouchableOpacity className="flex flex-row items-center p-3 border border-gray-400">
            <Ionicons name="newspaper" size={28} color="green"></Ionicons>
            <Text className="ml-2 text-base font-normal">
              Tap to view your feeds
            </Text>
          </TouchableOpacity>
          {user.role == "admin" ? (
            <TouchableOpacity className="flex flex-row items-center p-3 border-b border-gray-400">
              <Ionicons name="people" color="green" size={28}></Ionicons>
              <Text className="ml-2 text-base font-normal">
                Tap to view users
              </Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
      </View>
      <View className="flex flex-col items-center justify-center p-4 mb-6">
        <View className=" p-2 w-full   ">
          <Text className=" text-center  text-xl font-semibold">
            Your are loged in as {user.role}
          </Text>
        </View>
        <TouchableOpacity
          className="px-6 py-2 bg-cyan-600 mt-4 rounded-md"
          onPress={signOut}
        >
          <Text className="text-base text-gray-50 font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
