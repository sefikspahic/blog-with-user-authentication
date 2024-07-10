import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbCaHKPlePZL4R-jztLW2SGty62rNtdBY",
  authDomain: "userauthblog.firebaseapp.com",
  projectId: "userauthblog",
  storageBucket: "userauthblog.appspot.com",
  messagingSenderId: "591889346410",
  appId: "1:591889346410:web:4bbea79191e0fd1fb9ff13",
  measurementId: "G-YTG4M66CBH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
