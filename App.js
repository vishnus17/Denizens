import React from "react";
import AppProvider from "./navigation";
import { Onboarding } from "./components/Onboard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppProvider />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: StatusBar.currentHeight,
  },
});
