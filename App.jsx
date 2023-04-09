import React from "react";
import AppProvider from "./navigation";
// import { Onboarding } from "./components/Onboard";
// import { Provider } from "react-redux";
import { Provider } from "react-redux";
import { store, persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppProvider />
      </PersistGate>
    </Provider>
  );
}
