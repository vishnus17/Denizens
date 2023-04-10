import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { TextInput } from "react-native-paper";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import db from "../../firebase";
import { updateDoc, doc, getDoc } from "firebase/firestore";
import {
  ProfileEdit,
  LoginSuccess,
  RefreshState,
  LoadFeeds,
} from "../../State/actions";

const EditProfile = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [image, setImage] = useState(null);
  const [firstname, setFirstname] = useState(user.userInfo.firstname);
  const [lastname, setLastname] = useState(user.userInfo.lastname);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  console.log(firstname);
  console.log(lastname);
  useEffect(() => {
    if (firstname != "" && firstname != user.userInfo.firstname) {
      setDisable(false);
    }
  }, [firstname]);
  useEffect(() => {
    if (lastname != "" && lastname != user.userInfo.lastname) {
      setDisable(false);
    }
  }, [lastname]);
  useEffect(() => {
    if (image != "") {
      setDisable(false);
    }
  }, [lastname]);
  const onClose = () => {
    navigation.goBack();
  };

  // picking profile pic
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log("image", result.uri);
    setImage(result.uri);
  };

  // uploading image to firestore
  const uploadPhoto = async (image) => {
    const storage = getStorage();
    const metadata = {
      contentType: "image/jpeg",
    };
    // const filename = image.substring(image.lastIndexOf("/") + 1);
    const imageRef = ref(storage, `profile/${user?.email}/${"profile"}`);
    const response = await fetch(image);
    const blob = await response.blob();
    return await uploadBytes(imageRef, blob, metadata).then((snapshot) => {
      return getDownloadURL(snapshot.ref).then((url) => {
        return url;
      });
    });
  };

  const onSubmit = async () => {
    setLoading(true);
    let currenState = {};
    if (image != null) {
      const dowloadURl = await uploadPhoto(image);
      const userRef = doc(db, "users", user.email);
      await updateDoc(userRef, {
        avathar: dowloadURl,
        firstname: firstname,
        lastname: lastname,
      });
    } else {
      const userRef = doc(db, "users", user.email);
      await updateDoc(userRef, {
        firstname: firstname,
        lastname: lastname,
      });
    }
    const userInfo = await getDoc(doc(db, "users", user.email));
    currenState = {
      user: {
        ...user,
        userInfo: userInfo.data(),
      },
    };
    await dispatch(LoginSuccess(currenState));
    await dispatch(LoadFeeds());
    alert("updated successfully");
    navigation.navigate("ProfileScreen");

    setLoading(false);
  };

  return (
    <View className="h-full w-full bg-white flex flex-col">
      <View className="flex flex-row items-center justify-between w-full p-[10]">
        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close-outline" size={38}></Ionicons>
        </TouchableOpacity>
        <Text className="text-lg font-semibold">EditProfile</Text>
        <TouchableOpacity onPress={onSubmit} disabled={disable}>
          <Ionicons name="checkmark" size={38}></Ionicons>
        </TouchableOpacity>
      </View>

      <View className="flex flex-row    w-full items-center justify-center  mt-10">
        <TouchableOpacity className="border-2 border-orange-50 rounded-full">
          {image == null ? (
            user.userInfo.avathar === "" ? (
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
            )
          ) : (
            <Image
              resizeMode="contain"
              style={{ borderRadius: 100, height: 120, width: 120 }}
              source={{ uri: image }}
            ></Image>
          )}
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="p-2" onPress={pickImage}>
        <Text className="text-[#3493D9] text-base font-medium text-center">
          Tap here to change profile pic
        </Text>
      </TouchableOpacity>
      <View className="p-[10] mt-2">
        <View>
          <Text className="opacity-[0.5] text-lg font-semibold">Firstame</Text>
          <TextInput
            placeholder="firstname"
            defaultValue={user.userInfo.firstname}
            onChangeText={setFirstname}
            className="text-base font-semibold border-b-[1] border-[#CDCDCD] bg-white   focus:border-sky-500"
          ></TextInput>
        </View>
        <View className="mt-6">
          <Text className="opacity-[0.5] text-lg font-semibold">Larstame</Text>
          <TextInput
            placeholder="lastname"
            defaultValue={user.userInfo.lastname}
            className="text-base font-medium border-b-[1] border-[#CDCDCD] bg-white   focus:border-sky-500"
            onChangeText={setLastname}
          ></TextInput>
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
