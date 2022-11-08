import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";
import { IconButton } from "react-native-paper";

var poolData = {
  UserPoolId: "ap-south-1_CjfNcNygq", // Your user pool id here
  ClientId: "3a6g176qng5vtfnul7pm8uv0ek", // Your client id here
};

const getUser = (setUser) => {
  var userPool = new CognitoUserPool(poolData);
  var cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
    cognitoUser.getSession(function (err, session) {
      if (err) {
        alert(err);
      }
      console.log("session validity: " + session.isValid());
      // NOTE: getSession must be called to authenticate user before calling getUserAttributes
      cognitoUser.getUserAttributes(function (err, attributes) {
        if (err) {
          console.log(err);
        } else {
          setUser({
            name: attributes[3].getValue(),
            role: attributes[2].getValue(),
          });
        }
      });
    });
  }
};

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    name: null,
    role: null,
  });

  const signOut = () => {
    // console.log(cognitoUser);
    var userPool = new CognitoUserPool(poolData);
    var cognitoUser = userPool.getCurrentUser();
    if (cognitoUser != null) {
      cognitoUser.signOut();
      AsyncStorage.removeItem("userToken");
      navigation.replace("LoginScreen");
    }
  };

  // const onButtonClick = () => {
  //   AsyncStorage.removeItem("@viewedOnboarding");
  // };
  useEffect(() => getUser(setUser), []);
  return (
    <SafeAreaView className="flex h-full align-middle bg-[#0f7e8d]">
      <View className="flex flex-row h-18  items-center mx-2 mt-5">
        <TouchableOpacity>
          <IconButton
            icon="chevron-left"
            size={28}
            className="ml-1 flex-none "
            onPress={() => {
              navigation.goBack();
            }}
          />
        </TouchableOpacity>
        <Text className="text-xl  text-center">Go Back</Text>
      </View>
      <View className="flex flex-grow justify-between p-8">
        {/* <View>
        <Text className="text-center">Profile</Text>
      </View> */}
        <View>
          <Text className="text-3xl font-medium">Welcome, {user.name}</Text>
        </View>
        <View>
          <Text className="text-xl font-normal align-center">
            You are logged in as {user.role}
          </Text>
        </View>
        <TouchableOpacity className="items-center" onPress={signOut}>
          <Text className=" w-60 bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center ">
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
