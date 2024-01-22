import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {

    apiKey: "AIzaSyAqyypen55lxFPdJGJzeCBKa3R2Ul4MFDc",
  
    authDomain: "react-meals-aa166.firebaseapp.com",
  
    projectId: "react-meals-aa166",
  
    storageBucket: "react-meals-aa166.appspot.com",
  
    messagingSenderId: "312867225201",
  
    appId: "1:312867225201:web:7810b062f7bd6bc367e5d0",
  
    measurementId: "G-507TREHEK3"
  
  };
 const app =initializeApp(firebaseConfig)  
 export  const Auth=getAuth(app);