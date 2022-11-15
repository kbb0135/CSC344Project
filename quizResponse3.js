
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// import { getDatabase, ref,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
// import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"; 
import {getFirestore,doc,collection,getDoc,setDoc,addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyD4pas0pvQQovr1vpT5QlBYWR_1OthDUEI",
//     authDomain: "dataapp-8bc6d.firebaseapp.com",
//     databaseURL: "https://dataapp-8bc6d-default-rtdb.firebaseio.com",
//     projectId: "dataapp-8bc6d",
//     storageBucket: "dataapp-8bc6d.appspot.com",
//     messagingSenderId: "1052775979865",
//     appId: "1:1052775979865:web:b8de5ba5d832e93b18ca48"
//   };
const firebaseConfig = {
    apiKey: "AIzaSyAIyfmd_5AtYzJdovcVzOZ4F555_fFHEN0",
    authDomain: "admin-d8e2a.firebaseapp.com",
    projectId: "admin-d8e2a",
    storageBucket: "admin-d8e2a.appspot.com",
    messagingSenderId: "521159802193",
    appId: "1:521159802193:web:ff41c81b9033c620b56770"
  };

const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
//const dbRef = ref(getDatabase());
//const auth = getAuth();
const db1 = getFirestore();
const docRef = doc(db1, "Quizes", "Quiz3");
const docSnap = await getDoc(docRef);
if(docSnap.exists()) {
    document.getElementById("q1").innerHTML = docSnap.data().question1
    document.getElementById("q2").innerHTML = docSnap.data().question2
    document.getElementById("q3").innerHTML = docSnap.data().question3
    document.getElementById("q4").innerHTML = docSnap.data().question4
    document.getElementById("a1").innerHTML = docSnap.data().a
    document.getElementById("a2").innerHTML = docSnap.data().h
    document.getElementById("a3").innerHTML = docSnap.data().j
    document.getElementById("a4").innerHTML = docSnap.data().n
}