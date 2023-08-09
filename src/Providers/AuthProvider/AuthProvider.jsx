import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //==================== Create User=====================
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //==================== Login =========================
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //================ Signout || Logout========================

  const logOut = () => {
    return signOut(auth);
  };

  //Observer user auth state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Logged in user inside auth state observer", currentUser);
      setUser(currentUser);
    });
    //stop observing while unmounting
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
