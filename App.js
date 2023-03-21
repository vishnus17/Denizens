import React from "react";
import AppProvider from "./navigation";
// import { Onboarding } from "./components/Onboard";
// import { Provider } from "react-redux";
import { AuthProvider } from "./State";

export default function App() {
  return <AppProvider />;
  // return (
  //   <AuthProvider>
  //     <AppProvider />
  //   </AuthProvider>
  // );
}
