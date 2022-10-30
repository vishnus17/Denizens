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

const Register = ({ navigation }) => {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleRegister = () => {
    var poolData = {
      UserPoolId: "ap-south-1_CjfNcNygq", // Your user pool id here
      ClientId: "3a6g176qng5vtfnul7pm8uv0ek", // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var name = firstname + " " + lastname;
    userPool.signUp(name,email,password, attributeList, null, function (
      err,
      result
    ) {
      if (err) {
        alert(err.message || JSON.stringify(err));
        return;
      }
      var cognitoUser = result.user;
      console.log("user name is " + cognitoUser.getUsername());
      alert("Registration Successful");
      navigation.replace("LoginScreen");
    });
  };

  const handleLoginClick = () => {
    navigation.replace("LoginScreen");
  }

  return (
    <View className="h-full bg-white">
      <View className="h-full mx-5 my-5 flex-1 bg-white relative">
        <Text className="mx-1 my-5 text-[20] font-semibold">Denizens</Text>
        <View className="mx-2 my-5 flex-1">
          <View className="flex ">
            <Text className="text-3xl font-medium">Register</Text>
            <View className="flex-column mt-2 ">
              <Text className="text-base font-normal">
                If you already have an account
              </Text>
              <View className="flex-row mt-1">
                <Text className="text-base font-normal">You can </Text>
                <Text className="text-[#0C21C1] text-base font-medium mx-1" 
                    onPress={handleLoginClick}
                >
                  Login here !
                </Text>
              </View>
            </View>
          </View>

          {/* taking username and password */}

          <View className="flex-col  mt-6">
            {/* first name */}
            <View className="flex flex-col">
              <Text className="text-base font-normal">First Name</Text>
              <View className="flex flex-row bg-gray-100 w-auto items-center p-2 border-gray border rounded-md my-2">
                <MaterialCommunityIcons
                  name="email-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput placeholder="Enter your First Name" className="ml-2" onChangeText={setFirstName}/>
              </View>
            </View>

            <View className="flex flex-col">
              <Text className="text-base font-normal">Last Name</Text>
              <View className="flex flex-row bg-gray-100 w-auto items-center p-2 border-gray border rounded-md my-2">
                <MaterialCommunityIcons
                  name="email-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput 
                  placeholder="Enter your Last Name" 
                  className="ml-2" 
                  onChangeText={setLastName}
                  />
              </View>
            </View>
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
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* password */}

            <View className="flex flex-col ">
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
                  onChangeText={setPassword}
                />
              </View>
              <TouchableOpacity className="mt-8">
                <Text
                  className=" w-full bg-blue-500 font-bold shadow-sm rounded-full p-3 text-white text-lg text-center "
                  onPress={handleRegister}
                >
                  Register
                </Text>
              </TouchableOpacity>
              <Text className="my-6 text-center font-normal text-[#B5B5B5] text-base">
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
export default Register;
