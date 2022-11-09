import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
  } from "react-native";
  import { React, useState } from "react";
  import { IconButton } from "react-native-paper";
  
  const OTP = ({ navigation }) => {
    
    const [OTP, onChangeOTP] = useState(null);
   

  
    const handleSubmit = () => {
        OTP !== ""
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
            onPress={OTP != null ? handleSubmit : null}
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
  