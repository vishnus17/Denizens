import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { React, useState } from "react";
import Input from "./Input";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Image } from "react-native-elements";
import db from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CookieStorage,
} from "amazon-cognito-identity-js";
import { useEffect } from "react";
import { set } from "react-hook-form";

const region = "ap-south-1";

const Register = ({ navigation }) => {
  const [loading, setLoading] = useState(null);
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmpass, setConfirmpass] = useState();

  const handleRegister = async () => {
    var poolData = {
      UserPoolId: "ap-south-1_CjfNcNygq", // Your user pool id here
      ClientId: "3a6g176qng5vtfnul7pm8uv0ek", // Your client id here
    };
    var userPool = new CognitoUserPool(poolData);
    var name = firstname + " " + lastname;
    var attributeList = [];

    var role = {
      Name: "custom:userRole",
      Value: "observer",
    };

    var dataname = {
      Name: "name",
      Value: name,
    };

    var attributeRole = new CognitoUserAttribute(role);
    attributeList.push(attributeRole);

    var attributeName = new CognitoUserAttribute(dataname);
    attributeList.push(attributeName);
    console.log(attributeName);
    console.log(attributeList);

    await userPool.signUp(
      email,
      password,
      attributeList,
      null,
      function (err, result) {
        if (err) {
          alert(err.message || JSON.stringify(err));
          return;
        }
        console.log("result", result);
        var cognitoUser = result.user;

        const docData = {
          firstname: firstname,
          lastname: lastname,
          email: email,
        };

        setDoc(doc(db, "users", email), docData).then(() => {
          var emailID = cognitoUser.getUsername();
          console.log("user name is " + emailID);
          alert("Registration Successful");
          navigation.navigate("OTPscreen", { email: emailID });
        });
        // cognitoUser.getUserAttributes((err, attributes) => {
        //   if (err) {
        //     console.log(err);
        //   } else {
        //     console.log("attributes", attributes[0].Value);
        //   }
        // });
      }
    );
  };

  const handleLoginClick = () => {
    navigation.replace("LoginScreen");
  };

  useEffect(() => {}, [loading]);

  return (
    <View className="h-full bg-white">
      <View className="h-full mx-5 mt-5 flex-1 bg-white relative">
        <Text className="mx-1 mt-5 text-[20] font-semibold">Denizens</Text>
        <View className="mx-2 mt-4 flex-1">
          <View className="flex ">
            <Text className="text-3xl font-medium">Register</Text>
            <View className="flex-column mt-2 ">
              <Text className="text-base font-normal">
                If you already have an account
              </Text>
              <View className="flex-row ">
                <Text className="text-base font-normal">You can </Text>
                <TouchableOpacity onPress={handleLoginClick}>
                  <Text className="text-[#0C21C1] text-base font-medium mx-1">
                    Login here !
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* taking username and password */}

          <View className="flex-col  mt-6">
            {/* first name */}
            <View className="flex flex-col">
              <Text className="text-base font-normal">First Name</Text>
              <View className="flex flex-row bg-gray-200 w-auto items-center px-2.5 py-2.5 active:border rounded-md my-2">
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="Enter your First Name"
                  className="ml-2 w-full"
                  onChangeText={setFirstName}
                />
              </View>
            </View>

            <View className="flex flex-col">
              <Text className="text-base font-normal">Last Name</Text>
              <View className="flex flex-row bg-gray-200 w-auto items-center px-2.5 py-2.5 active:border rounded-md my-2">
                <MaterialCommunityIcons
                  name="card-account-details-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="Enter your Last Name"
                  className="ml-2 w-full"
                  onChangeText={setLastName}
                />
              </View>
            </View>
            {/* email */}
            <View className="flex flex-col">
              <Text className="text-base font-normal">Email</Text>
              <View className="flex flex-row bg-gray-200 w-auto items-center px-2.5 py-2.5 active:border rounded-md my-2">
                <MaterialCommunityIcons
                  name="email-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="Enter your email"
                  className="ml-2 w-full"
                  onChangeText={setEmail}
                />
              </View>
            </View>

            {/* password */}

            <View className="flex flex-col ">
              <Text className="text-base font-normal">Password</Text>
              <View className="flex flex-row bg-gray-200 w-auto items-center px-2.5 py-2.5 active:border rounded-md my-2">
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="Password"
                  className="ml-2 w-full"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                />
              </View>
            </View>

            {/* confirm password */}
            {/* <View className="flex flex-col ">
              <Text className="text-base font-normal">Confirm Password</Text>
              <View className="flex flex-row bg-gray-200 w-auto items-center px-2.5 py-2.5 active:border rounded-md my-2">
                <MaterialCommunityIcons
                  name="lock-outline"
                  size={19}
                  color={"#7978B5"}
                  style={{ fontWeight: "400" }}
                />
                <TextInput
                  placeholder="ConfirmPassword"
                  className="ml-2 w-full"
                  secureTextEntry={true}
                  onChangeText={setConfirmpass}
                />
              </View>
            </View> */}

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
              <TouchableOpacity>
                <Image
                  source={require("../../../assests/icons/facebook.png")}
                  className="h-10 w-10 mx-3"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../../assests/icons/google.png")}
                  className="h-10 w-10 mx-3"
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../../assests/icons/apple.png")}
                  className="h-10 w-10 mx-3"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Register;
