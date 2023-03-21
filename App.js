import React from "react";
import AppProvider from "./navigation";
<<<<<<< HEAD
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
=======
import { Onboarding } from "./components/Onboard";
import { Provider } from "react-redux";
import { AuthProvider } from "./State";

export default function App() {
  // return <AppProvider />;
  return (
    <AuthProvider>
      <AppProvider />
    </AuthProvider>
  );
>>>>>>> 9d59bbd2a4acf22d39d4cc0618e9e7177fa14177
}
