import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
  } from "react-native";
  import { React, useEffect, useState } from "react";
  import { IconButton } from "react-native-paper";
  import {
    AuthenticationDetails,
    CognitoUser,
    CognitoUserAttribute,
    CognitoUserPool,
    CookieStorage,
  } from "amazon-cognito-identity-js";

  const OTP = ({ route,navigation }) => {
    const [OTP, onChangeOTP] = useState(null);
    const {email} = route.params;
    const handleSubmit = () => {
      var poolData = {
        UserPoolId: "ap-south-1_CjfNcNygq", // Your user pool id here
        ClientId: "3a6g176qng5vtfnul7pm8uv0ek", // Your client id here
      };
      var userPool = new CognitoUserPool(poolData);
      var userData = {
        Username: email,
        Pool: userPool,
      };
      var cognitoUser = new CognitoUser(userData);
      cognitoUser.confirmRegistration(OTP, true, function (err, result) {
        if (err) {
          alert("Incorrect OTP. Please request for a new OTP");
          return;
        }
        console.log("call result: " + result);
        alert("Your account has been verified. Please Login");
        navigation.navigate("LoginScreen");
      });
    };

    return (
      <View className="h-screen relative">
        {/* <View className="h-full mx-5 my-5 flex-1 bg-white relative">
           <Text className="mx-1 my-5 text-[20] font-semibold">Denizens</Text> */}
        {/* <StatusBar className="auto" /> */}
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
          <Text className="text-xl  text-center">Enter Verification Code</Text> 
        </View>
        <View className="p-6 flex flex-col h-full items-center justify-center absolute">
          {/* <View className={tw`border`}> */}
          <Text className="text-blue-500 font-semibold mb-2">Enter OTP</Text>
          <Text className="mb-5 text-100">We have sent an OTP on your Email</Text>
          {/* </View> */}
        
  
          <View className="flex flex-row">
            <TextInput
              className="p-3 bg-gray-200 active:border w-full my-2 rounded-lg"
              onChangeText={onChangeOTP}
              value={OTP}
              placeholder="Enter OTP"
              keyboardType="numeric"
            />
            <TouchableOpacity>
              <Text className="text-blue-500 font-semibold absolute right-4 top-6">
                Resend OTP
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="w-full mt-7"
            onPress={handleSubmit}
          >
            <Text className="bg-blue-500 rounded-full p-3 text-white text-lg text-center">
             Verify
            </Text>
          </TouchableOpacity>
          <Text className="mt-10 text-100">Please do not disclose your OTP to anyone</Text>
        </View>
        {/* </View> */}
      </View>
    );
  };
  
  export default OTP;
  