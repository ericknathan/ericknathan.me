"use client";

import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import {
  signOut as firebaseSignOut,
  onUpdateUser,
  signInWithGithub,
} from "@/lib/firebase/auth";

type AuthStatus = "authenticated" | "unauthenticated" | "loading";
interface AuthContextProps {
  user: User | null;
  status: AuthStatus;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("loading");

  async function signIn() {
    setStatus("loading");

    const response = await signInWithGithub();

    if (response?.user) {
      setUser(response.user);
      return setStatus("authenticated");
    }

    setStatus("unauthenticated");
  }

  async function signOut() {
    await firebaseSignOut();
    setUser(null);
    setStatus("unauthenticated");
  }

  useEffect(() => {
    onUpdateUser((user) => {
      if (user) {
        setStatus("authenticated");
        return setUser(user);
      }

      setStatus("unauthenticated");
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, status, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
