import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const UserContext = createContext(null);

const ContextProvider = ({ children }) => {
  let [user, setUser] = useState(null);
  let [dataLoading, setDataLoading] = useState(true);

  // google sign in
  let googleLoginUser = () => {
    setDataLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // github sign in
  let githubLoginUser = () => {
    setDataLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // create a user with email & password
  let createUser = (email, pass) => {
    setDataLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  // login a user with email & password
  let loginUser = (email, pass) => {
    setDataLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // log out a user
  let logOutUser = () => {
    return signOut(auth)
  }
  // update user's profile
  let updateUser = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  // observe user
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setDataLoading(false);
    });

    return () => unsubscribe();
  }, []);
  const userInfo = {
    user,
    googleLoginUser,
    githubLoginUser,
    createUser,
    loginUser,
    logOutUser,
    updateUser,
    dataLoading,
    setDataLoading,
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProvider;
