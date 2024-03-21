"use client";

import {
  GithubAuthProvider,
  User,
  browserLocalPersistence,
  getAuth,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";

import firebaseApp from "./app";

const auth = !firebaseApp ? null : getAuth(firebaseApp);

export async function signInWithGithub() {
  try {
    if (!auth) throw new Error("Firebase not initialized");

    await setPersistence(auth, browserLocalPersistence);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  } catch (error) {
    alert("Não foi possível realizer o login.");
  }
}

export function onUpdateUser(callback: (user: User | null) => void) {
  if (!auth) throw new Error("Firebase not initialized");
  auth.onAuthStateChanged(callback);
}

export function signOut() {
  if (!auth) throw new Error("Firebase not initialized");
  return auth.signOut();
}
