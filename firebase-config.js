import { initializeApp } from "firebase/app";
import { initializeAuth, inMemoryPersistence } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyCZrWRygDiWBhhg9ZVCBGEfz9UYmKt8hR4",
  authDomain: "logincarapp.firebaseapp.com",
  projectId: "logincarapp",
  storageBucket: "logincarapp.appspot.com",
  messagingSenderId: "361095677348",
  appId: "1:361095677348:web:e91f262db0b462c4742d31",
  measurementId: "G-XQ6BX87H8E"
};
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: inMemoryPersistence
});