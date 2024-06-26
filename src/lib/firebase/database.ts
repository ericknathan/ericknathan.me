import { getDatabase } from "firebase/database";
import firebaseApp from "./app";

export const database = !firebaseApp
  ? null
  : getDatabase(firebaseApp);
