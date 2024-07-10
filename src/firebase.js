import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set, push, remove} from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWLkT4-uBkouPr0AAcHPcLCaqz5HtlBeU",
  authDomain: "roshnimiki.firebaseapp.com",
  projectId: "roshnimiki",
  databaseURL: "https://roshnimiki-default-rtdb.firebaseio.com/",
  storageBucket: "roshnimiki.appspot.com",
  messagingSenderId: "686878224272",
  appId: "1:686878224272:web:6019387f72ade36f3e8d15"
};

const app = initializeApp(firebaseConfig);
const database  = getDatabase(app);

export {  database, ref, onValue, set, push, remove};