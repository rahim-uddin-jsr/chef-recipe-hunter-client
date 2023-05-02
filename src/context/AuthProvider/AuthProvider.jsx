import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext } from "react";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const createUserWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const value = {
    createUserWithEmail,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
