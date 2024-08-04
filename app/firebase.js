// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "key",
  authDomain: "key",
  projectId: "key",
  storageBucket: "key",
  messagingSenderId: "key",
  appId: "key",
  measurementId: "key"
};

// Check if `window` is defined to ensure this runs only in the browser
let app;
let analytics;
let db;

if (typeof window !== 'undefined') {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app); // Optional: Remove if you don't use Analytics
  db = getFirestore(app);
}

export {db};