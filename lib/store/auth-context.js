"use client";

import { createContext, useState } from "react";

import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export const authContext = createContext({
  user: null,
  loading: false,
  googleLoginHandler: async () => {},
  logout: async () => {},
});

export default function AuthContextProvider({ children }) {
  const [user, authLoading] = useAuthState(auth);
  const [loading, setLoading] = useState(false); // Custom loading state for actions
  const googleProvider = new GoogleAuthProvider(auth);

  const googleLoginHandler = async () => {
    setLoading(true); // Start loading during login
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false); // Stop loading after login attempt
    }
  };

  const logout = async() => {
    setLoading(true); // Start loading during logout
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setLoading(false); // Stop loading after logout attempt
    }
  };
  // The combined loading state considers both auth loading and custom loading
  const isLoading = authLoading || loading;

  const values = {
    user,
    loading: isLoading,
    googleLoginHandler,
    logout,
  };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}