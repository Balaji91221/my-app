// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB40mFiDQ0Z2UoO3Y4dTPGkBVs2sX6ax0E",
  authDomain: "netfilex-clone-e1128.firebaseapp.com",
  projectId: "netfilex-clone-e1128",
  storageBucket: "netfilex-clone-e1128.appspot.com",
  messagingSenderId: "734892864157",
  appId: "1:734892864157:web:815ae7b4b3bdf19dd61a74",
  measurementId: "G-9GYSZ5KFG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);