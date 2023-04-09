import { createContext, useContext, useState } from "react";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => React.useContext(AuthContext);
