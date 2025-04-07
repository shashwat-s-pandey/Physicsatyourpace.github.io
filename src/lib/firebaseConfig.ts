// lib/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHSYSoNeENClGW6H7oWlfo7y2mV3f_eQk",
    authDomain: "physics-at-your-pace.firebaseapp.com",
    projectId: "physics-at-your-pace",
    storageBucket: "physics-at-your-pace.firebasestorage.app",
    messagingSenderId: "159491733959",
    appId: "1:159491733959:web:55369cdb45ea08c871c1e2",
    measurementId: "G-HGN2YJNZMX"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
