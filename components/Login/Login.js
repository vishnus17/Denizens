import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import Input from "./Input";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Image } from "react-native-elements";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CookieStorage,
} from "amazon-cognito-identity-js";

const region = "ap-south-1";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    var authenticationData = {
      Username: "vishnu.satheesh178@gmail.com",
      Password: "Qwerty@12345",
    };
    var authenticationDetails = new AuthenticationDetails(authenticationData);
    var poolData = {
      UserPoolId: "ap-south-1_CjfNcNygq", // Your user pool id here
      ClientId: "3a6g176qng5vtfnul7pm8uv0ek", // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var userData = {
      Username: "vishnu.satheesh178@gmail.com",
      Pool: userPool,
    };
    var cognitoUser = new CognitoUser(userData);
    var cognitoUser, sessionUserAttributes;

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        var accessToken = result.getAccessToken().getJwtToken();
        console.log(accessToken);
        navigation.replace("Home");
      },

      onFailure: function (err) {
        // User authentication was not successful
      },

      mfaRequired: function (codeDeliveryDetails) {
        // MFA is required to complete user authentication.
        // Get the code from user and call
        cognitoUser.sendMFACode(mfaCode, this);
      },

      newPasswordRequired: function (userAttributes, requiredAttributes) {
        // User was signed up by an admin and must provide new
        // password and required attributes, if any, to complete
        // authentication.

        // the api doesn't accept this field back
        delete userAttributes.email_verified;

        // store userAttributes on global variable
        sessionUserAttributes = userAttributes;
      },

      onFailure: function (err) {
        alert(err.message || JSON.stringify(err));
      },
    });
  };

  const handleRegisterClick = () => {
    navigation.replace("RegisterScreen");
  };

  return (
    <View className="h-full bg-white">
      <View className="h-full mx-5 my-5 flex-1 bg-white relative">
        <Text className="mx-1 my-5 text-[20] font-semibold">Denizens</Text>
        <View className="mx-2 my-5 flex-1">
          <View className="flex ">
            <Text className="text-3xl font-medium">Sign in</Text>
            <View className="flex-column mt-8 ">
              <Text className="text-base font-normal">
                If you don’t have an account
              </Text>
              <View className="flex-row mt-1">
                <Text className="text-base font-normal">You can </Text>
                <Text
                  className="text-[#0C21C1] text-base font-medium mx-1"
                  onPress={handleRegisterClick}
                >
                  Register here !
                </Text>
              </View>
            </View>
          </View>

          {/* taking username and password */}

          <View className="flex-col  mt-14">
            {/* email */}
            <View className="flex flex-col">
              <Text className="text-base font-normal">Email</Text>
              <View className="flex flex-row bg-gray-100 w-auto items-center p-2 border-gray border rounded-md my-2">
                <MaterialCommunityIcons
                  name="email-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="Enter your email"
                  className="ml-2"
                  onChangeText={setUsername}
                />
              </View>
            </View>

            {/* password */}

            <View className="flex flex-col mt-6">
              <Text className="text-base font-normal">Password</Text>
              <View className="flex flex-row bg-gray-100 w-auto items-center p-2 border-gray border rounded-md my-2">
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="Password"
                  className="ml-2"
                  secureTextEntry={true}
                  onChangePassword={setPassword}
                />
              </View>
              <View className="mt-[1.5] flex-row justify-end">
                {/* <Checkbox
                  style}}
                  value={isChecked}
                  onValueChange={setChecked}
                  color={isChecked ? "blue" : undefined}
                  button
                /> */}
                <Text className="font-light text-[#888888]">
                  forgot password ?
                </Text>
              </View>
              <TouchableOpacity className="mt-14">
                <Text
                  className=" w-full bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center "
                  onPress={handleLogin}
                >
                  Login
                </Text>
              </TouchableOpacity>
              <Text className="my-12 text-center font-normal text-[#B5B5B5] text-base">
                or continue with
              </Text>
              <View className="flex-row justify-center">
                <Image
                  source={require("../../assests/icons/facebook.png")}
                  className="h-10 w-10 mx-3"
                />
                <Image
                  source={require("../../assests/icons/google.png")}
                  className="h-10 w-10 mx-3"
                />
                <Image
                  source={require("../../assests/icons/apple.png")}
                  className="h-10 w-10 mx-3"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
