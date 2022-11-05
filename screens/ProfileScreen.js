import { SafeAreaView, StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CognitoUserPool, CookieStorage } from "amazon-cognito-identity-js";

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
    <SafeAreaView className="h-full flex justify-center align-middle">
      <View>
        <Text className="text-center">Profile</Text>
      </View>
      <View>
        <Text className="text-center">
          Welcome {user.name}. You are logged in as {user.role}
        </Text>
      </View>
      <View>
        <Button onPress={signOut} title="Sign Out" />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
