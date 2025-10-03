import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../services/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword, // ✅ add signup
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Signup with Email/Password
  const signupWithEmail = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // ✅ Login with Email/Password
  const loginWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // ✅ Google login
  const loginWithGoogle = () => signInWithPopup(auth, provider);

  // ✅ Logout
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signupWithEmail, loginWithEmail, loginWithGoogle, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};
