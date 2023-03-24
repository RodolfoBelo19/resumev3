import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDWSjsmhaX_Ut7xt91ME0IXgtP8NuaJtU",
  authDomain: "auth-resume.firebaseapp.com",
  projectId: "auth-resume",
  storageBucket: "auth-resume.appspot.com",
  messagingSenderId: "439107132074",
  appId: "1:439107132074:web:c11306a2bbd2d684e40ed3",
  measurementId: "G-CZT4P63PH9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: 'select_account' });