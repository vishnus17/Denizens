import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";
import { IconButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { Logout } from "../State/actions";

// var poolData = {
//   UserPoolId: "ap-south-1_CjfNcNygq", // Your user pool id here
//   ClientId: "3a6g176qng5vtfnul7pm8uv0ek", // Your client id here
// };

// const getUser = (setUser) => {
//   var userPool = new CognitoUserPool(poolData);
//   var cognitoUser = userPool.getCurrentUser();
//   if (cognitoUser != null) {
//     cognitoUser.getSession(function (err, session) {
//       if (err) {
//         alert(err);
//       }
//       console.log("session validity: " + session.isValid());
//       // NOTE: getSession must be called to authenticate user before calling getUserAttributes
//       cognitoUser.getUserAttributes(function (err, attributes) {
//         if (err) {
//           console.log(err);
//         } else {
//           setUser({
//             name: attributes[3].getValue(),
//             role: attributes[2].getValue(),
//           });
//         }
//       });
//     });
//   }
// };

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [BtnLoading, setButtonLoading] = useState(false);
  // const [user, setUser] = useState({
  //   name: null,
  //   role: null,
  // });

  const signOut = async () => {
    setButtonLoading(true);
    await dispatch(Logout());
    Alert.alert("you logedout successfully");

    setButtonLoading(false);

    // console.log(cognitoUser);
    //   var userPool = new CognitoUserPool(poolData);
    //   var cognitoUser = userPool.getCurrentUser();
    //   if (cognitoUser != null) {
    //     cognitoUser.signOut();
    //     AsyncStorage.removeItem("userToken");
    //     navigation.replace("LoginScreen");
    //   }
  };

  // const onButtonClick = () => {
  //   AsyncStorage.removeItem("@viewedOnboarding");
  // };

  return (
    <SafeAreaView className="flex h-full align-middle bg-[#fff]">
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
        <Text className="text-2xl  text-center">Go Back</Text>
      </View>
      <View className="flex flex-grow justify-between p-8">
        {/* <View>
        <Text className="text-center">Profile</Text>
      </View> */}
        <View>
          <Text className="text-3xl font-medium">
            Welcome, {user?.userInfo?.firstname} !
          </Text>
        </View>
        <View style={styles.welcomeImage}>
          {/* 
        <Image source={require('../assests/images/welcome.png')}/>
       
       */}
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../assests/images/welcome.png")}
          />
        </View>
        <View>
          <Text className="text-xl ml-8 font-normal align-center">
            You are logged in as {user.role}
          </Text>
        </View>
        <TouchableOpacity
          className="items-center"
          onPress={!BtnLoading && signOut}
        >
          <Text className=" w-60 mt-10 bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center ">
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  welcomeImage: {
    flex: 1,
    // width:'100%',
    justifyContent: "center",
    alignItems: "center",
  },
});
