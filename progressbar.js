
let q1 = 0;
let q2 =1;
let q3 = 2;
let quiz1;
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase,set, ref,update, child, get,push} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD4pas0pvQQovr1vpT5QlBYWR_1OthDUEI",
    authDomain: "dataapp-8bc6d.firebaseapp.com",
    databaseURL: "https://dataapp-8bc6d-default-rtdb.firebaseio.com",
    projectId: "dataapp-8bc6d",
    storageBucket: "dataapp-8bc6d.appspot.com",
    messagingSenderId: "1052775979865",
    appId: "1:1052775979865:web:b8de5ba5d832e93b18ca48"
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dbRef = ref(getDatabase());
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
      //const uid = user.uid;
      if(user) {
          const uid = user.uid;
          get(child(dbRef, `users/${uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log(snapshot.val());
        quiz1  = snapshot.val().score;
        console.log("value"+quiz1)

        function start(q1,quiz1) {
          //window.onload = function () {window.location.reload()}
              var percent = document.querySelector(`#progress_${q1} .percent`);
              var progressing = document.querySelector(`#progress_${q1} .progressing`);
              var circle = document.querySelector(`#progress_${q1} .circle`);
          
              requestAnimationFrame(startProgress);
              var progress = 0;
             
              let totalScore1 = quiz1*25;
              var random = totalScore1;
              console.log(totalScore1);
              console.log(random);
              function startProgress() {
                  progress += 1;
                  if (progress <= random) {
                      percent.innerHTML = parseInt(progress) + '%';
                      progressing.style.width = progress + '%';
                      circle.style.left = progress + '%';
                  }
                  requestAnimationFrame(startProgress);
              }
          
          }
          
          start(q1,quiz1);
  
    } else {
      console.log("No data available");
      console.log("Test1");
    }
  }).catch((error) => {
    console.error(error);
  });
  
          
  }
  else { 
      console.log("No data available");
      sessionStorage.removeItem("quizTest");
  }
  })

