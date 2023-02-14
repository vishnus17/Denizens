import { View, Text } from "react-native";
import React from "react";
import OTP from "../components/Auth/otp/Otp";

const OTPScreen = ({ navigation, route }) => {
  return <OTP navigation={navigation}
  route={route}/>;
  
};

export default OTPScreen;
