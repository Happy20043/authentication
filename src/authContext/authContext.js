import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const login = (data) => {
    // Implement your login logic here
    setUser(data);
  };
  const registerUser = (data) => {
    // Implement your login logic here
    setUserData(data);
  };

  const logout = () => {
    // Implement your logout logic here
    setUser(null);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, userData, login, logout, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
