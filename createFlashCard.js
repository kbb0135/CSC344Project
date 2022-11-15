import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getDatabase,set, ref,update,get,child, onValue} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import {getFirestore,doc,collection,getDoc,setDoc,addDoc} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAIyfmd_5AtYzJdovcVzOZ4F555_fFHEN0",
    authDomain: "admin-d8e2a.firebaseapp.com",
    projectId: "admin-d8e2a",
    storageBucket: "admin-d8e2a.appspot.com",
    messagingSenderId: "521159802193",
    appId: "1:521159802193:web:ff41c81b9033c620b56770"
  };
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dbRef = ref(getDatabase());
  const db = getDatabase();
  const auth = getAuth();
  const db1 = getFirestore();
  var ques1, ques2, ques3, ques4,ques5,ques6,ques7;
  var ans1, ans2, ans3, ans4,ans5,ans6,ans7;
  
    document.getElementById('submit').addEventListener('click', function() {
    ques1 = document.getElementById('q1').value;
    ans1 = document.getElementById('a1').value;
    ques2 = document.getElementById('q2').value;
    ans2 = document.getElementById('a2').value;
    ques3 = document.getElementById('q3').value;
    ans3 = document.getElementById('a3').value;
    ques4 = document.getElementById('q4').value;
    ans4 = document.getElementById('a4').value;
    ques5 = document.getElementById('q5').value;
    ans5 = document.getElementById('a5').value;
    ques6 = document.getElementById('q6').value;
    ans6 = document.getElementById('a6').value;
    ques7 = document.getElementById('q7').value;
    ans7 = document.getElementById('a7').value;
    onAuthStateChanged(auth, (user) => {
        update(ref(database,'FlashCard/'+user.uid),{
            Question1:ques1,
            Answer1:ans1,
            Question2:ques2,
            Answer2:ans2,
            Question3:ques3,
            Answer3:ans3,
            Question4:ques4,
            Answer4:ans4,
            Question5:ques5,
            Answer5:ans5,
            Question6:ques6,
            Answer6:ans6,
            Question7:ques7,
            Answer7:ans7
        })
    })
async function f1() {
await setDoc(doc(db1,"FlashCards", "Chapter1"),{
            Question1:ques1,
            Answer1:ans1,
            Question2:ques2,
            Answer2:ans2,
            Question3:ques3,
            Answer3:ans3,
            Question4:ques4,
            Answer4:ans4,
            Question5:ques5,
            Answer5:ans5,
            Question6:ques6,
            Answer6:ans6,
            Question7:ques7,
            Answer7:ans7
});
}
f1();
console.log("I am here");
})

const docRef = doc(db1, "FlashCards", "Chapter1");
const docSnap = await getDoc(docRef);

if(docSnap.exists()) {
    console.log("TEst2");
    console.log(docSnap.data().Question1);
}
else {
    console.log("No such document");
}