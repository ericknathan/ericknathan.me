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

const auth = getAuth(firebaseApp);

export async function signInWithGithub() {
  try {
    await setPersistence(auth, browserLocalPersistence);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  } catch (error) {
    alert("Não foi possível realizer o login.");
  }
}

export function onUpdateUser(callback: (user: User | null) => void) {
  auth.onAuthStateChanged(callback);
}

export function signOut() {
  return auth.signOut();
}
