// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDokN_y86VqvJnscGIGIIpDNv1qi0-cGCY",
  authDomain: "room-test-26eb3.firebaseapp.com",
  projectId: "room-test-26eb3",
  storageBucket: "room-test-26eb3.firebasestorage.app",
  messagingSenderId: "1051586679895",
  appId: "1:1051586679895:web:209409e1fb8d98ef15ff12",
  measurementId: "G-9WZ5NK9TXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);