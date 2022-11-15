
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
export var temp3;

const app = initializeApp(firebaseConfig);
//const database = getDatabase(app);
//const dbRef = ref(getDatabase());
//const auth = getAuth();
const db1 = getFirestore();
const docRef = doc(db1, "Quizes", "Quiz3");
const docSnap = await getDoc(docRef);
if(docSnap.exists()) {
var quizData = [
    {
        //count: " ",
        page: "1/4",
        question: docSnap.data().question1,
        a: docSnap.data().a,
        b: docSnap.data().b,
        c: docSnap.data().c,
        d: docSnap.data().d,
        correct: docSnap.data().correctAns,
    },
    {
        //count: " ",
        page: "2/4",
        question: docSnap.data().question2,
        a: docSnap.data().e,
        b: docSnap.data().f,
        c: docSnap.data().g,
        d: docSnap.data().h,
        correct: docSnap.data().correctAns1,

    },
    {
        page: "3/4",
        question: docSnap.data().question3,
        a: docSnap.data().i,
        b: docSnap.data().j,
        c: docSnap.data().k,
        d: docSnap.data().l,
        correct: docSnap.data().correctAns2,

    },
    {
        page: "4/4",
        question: docSnap.data().question4,
        a: docSnap.data().m,
        b: docSnap.data().n,
        c: docSnap.data().o,
        d: docSnap.data().p,
        correct: docSnap.data().correctAns3,
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const pageNum = document.getElementById('page')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submit_button = document.getElementById('submit')
const home_button = document.getElementById('home')
let currentQuiz = 0
let score = 0
const wrongANS = []
//export let check = 12;

// const timer = document.getElementById('count')


// const timer = document.getElementById('count')

// home_button.addEventListener('click', () => {
//     if (window.confirm("The progress will be lost. Do you really want to leave?")) {
//         window.open('http://127.0.0.1:5500/home.html', "Thanks for Visiting!");
//       }    
// })

home_button.addEventListener("click", function( e ){ //e => event
    if( ! confirm("All progress will be lost. Are you sure?") ){
        e.preventDefault(); // ! => don't want to do this
    } else {
        //want to do this! => maybe do something about it?
        window.location.assign("home.html");
        // alert('Ok, lets do this!');
    }
});

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    var count = 300000;
    var interval = setInterval(function(){
    console.log("test...............")
    count=document.getElementById('count').innerText;
    count--;
    if (count === 0){
        ``
        // clearInterval(interval);

    // document.getElementById('count').innerText='Done';
    // or...
    alert("You're out of time!");
    quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">See Results</button> 
           `
    }
}, 1000);
    
    pageNum.innerText = currentQuizData.page
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submit_button.addEventListener('click', () => {
    //alert("test 123")
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
           localStorage.setItem("sc3", score);
           
           
       }
    //    else {
    //         wrongANS==quizData.[currentQuiz]
    //    }
       currentQuiz++
       
       if(currentQuiz < quizData.length) {
           loadQuiz()

       } else {
        
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Retake Quiz</button>
            <button onclick="window.location.assign(home.html)> Home </button>
           ` 
       }
       
    }
})
}
temp3=localStorage.getItem("sc3");
console.log("temp="+temp3);
// console.log(quiz[0]);
// onAuthStateChanged(auth, (user) => {
//     // const user = userCredential.user;
//        // var submit = document.getElementById('submit').value;
//     //const uid = user.uid;
//     if(user) {
//         const question = quizData;
//         console.log(question);
//         document.getElementById('submit').addEventListener('click', function(){
//             //alert("Test1");
//             //alert(score);
//             //console.log("Adb")
        
//             update(ref(database, 'users/'+user.uid),{
//                 Quiz: question,
//                 score: score
//             })
// //console.log("test3");
// //console.log(score1);
// })      
// }
// })
