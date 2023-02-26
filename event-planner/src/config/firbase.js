// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlItPIzILTS75IvapFOfVU9E_WGeNt_d4",
  authDomain: "event-planner-b4a8f.firebaseapp.com",
  projectId: "event-planner-b4a8f",
  storageBucket: "event-planner-b4a8f.appspot.com",
  messagingSenderId: "850616765133",
  appId: "1:850616765133:web:eef8e9e1d920cd41477784",
  measurementId: "G-FER3MDFKG1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export  { auth, analytics };
