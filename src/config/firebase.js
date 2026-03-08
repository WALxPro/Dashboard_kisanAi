import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDe2iS_pKZxP_gaRx4JrbVyJAzxZyHP5OY",
  authDomain: "kisanai-950b1.firebaseapp.com",
  projectId: "kisanai-950b1",
  storageBucket: "kisanai-950b1.firebasestorage.app",
  messagingSenderId: "567611905012",
  appId: "1:567611905012:web:3c4991286b34d11d5a5fa1",
  measurementId: "G-GFRXXLS7FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);



export default {auth , app };



