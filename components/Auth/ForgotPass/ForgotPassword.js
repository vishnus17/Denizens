import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { React, useState } from "react";
import { IconButton } from "react-native-paper";
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserAttribute,
  CognitoUserPool,
  CookieStorage,
} from "amazon-cognito-identity-js";

const ForgotPassword = ({ navigation }) => {
  const [email, onChangeEmail] = useState(null);
  const [OTP, onChangeOTP] = useState(null);
  const [emailerr, setEmailerr] = useState(null);

//     var poolData = {
//       UserPoolId: ${{ secrets.UserPoolId }}, // Your user pool id here
//       ClientId: , ${{ secrets.ClientId }} // Your client id here
//     }
  // var userPool = new CognitoUserPool(poolData);
  // CognitoUser.forgotPassword({
  //   inputVerificationCode: function(data) {
  //     console.log('Code sent to: ' + data);
  //     var verificationCode = OTP;
  //     CognitoUser.confirmPassword(verificationCode, {
  //       onSuccess() {
  //         console.log('Email confirmed!');
  //         handleSubmit()
  //       },
  //       onFailure(err) {
  //         console.log('Email not confirmed!');
  //       },
  //     });
  //   },
  // });

  const validateEmail = () => {
    // return String(email)
    //   .toLowerCase()
    //   .match(
    //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //   );
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSubmit = () => {
    validateEmail && email != "" && OTP != ""
      ? navigation.replace("ChangePasswordScreen")
      : "";
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
        <Text className="text-xl  text-center">Forgot Password</Text>
      </View>
      <View className="p-6 flex flex-col h-full items-center justify-center absolute">
        {/* <View className={tw`border`}> */}
        <Text className="mb-7 text-xl">Verify your identity</Text>
        {/* </View> */}
        <TextInput
          className="p-3 bg-gray-200 active:border w-full mb-2 rounded-lg"
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter your registered email"
          // onBlur={() => {
          //   !validateEmail ? setEmailerr(true) : "";
          // }}
          keyboardType="email"
        />

        <View className="flex flex-row">
          <TextInput
            className="p-3 bg-gray-200 active:border w-full my-2 rounded-lg"
            onChangeText={onChangeOTP}
            value={OTP}
            placeholder="Enter OTP"
            keyboardType="numeric"
          />
          <TouchableOpacity>
            <Text className="text-blue-500 font-semibold absolute right-4 top-6" onPress={() => navigation.replace("OTPscreen")}>
              Generate OTP
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="w-full mt-7"
          onPress={email != null && OTP != null ? handleSubmit : null}
        >
          <Text className="bg-blue-500 rounded-lg p-3 text-white text-lg text-center">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
    </View>
  );
};

export default ForgotPassword;
