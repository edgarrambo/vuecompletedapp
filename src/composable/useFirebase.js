import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


import {firebaseConfig } from "../firebaseConfig";

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);


//code that was preloaded
 //const analytics = getAnalytics(app);
//import { getAnalytics } from "firebase/analytics";