import { initializeApp } from "firebase/app";

const firebaseAppSingleton = () => {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
  };

  return initializeApp(firebaseConfig);
};

type FirebaseAppSingleton = ReturnType<typeof firebaseAppSingleton>;

const globalForFirebaseApp = globalThis as unknown as {
  firebaseApp: FirebaseAppSingleton | undefined;
};

const firebaseApp = globalForFirebaseApp.firebaseApp ?? firebaseAppSingleton();

export default firebaseApp;

if (process.env.NODE_ENV !== "production")
  globalForFirebaseApp.firebaseApp = firebaseApp;
