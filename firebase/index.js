// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDko6QuyPM2NZ8NjlXPKIDkY-qlsdO87Go",
  authDomain: "next-js-demo-16257.firebaseapp.com",
  projectId: "next-js-demo-16257",
  storageBucket: "next-js-demo-16257.appspot.com",
  messagingSenderId: "652574114545",
  appId: "1:652574114545:web:ad1dc9019505486f851f50",
  measurementId: "G-CBXZNQM3MG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default index;
