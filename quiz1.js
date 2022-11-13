import {temp, temp1,temp2, temp3, temp4, temp5,
    temp6,temp7,temp8,temp9,temp10,temp11,temp12,
    temp13,temp14,temp15,temp16,temp17,temp18,temp19,temp20,
    temp21, temp22,temp23} from '/createQuiz1.js';
console.log(temp2+" "+temp3+" ")
//console.log(s1)
//console.log(temp)
//import {score} from '/quiz1.js';
//import { getDatabase,set, ref,update,get,child} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, ref,update} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyD4pas0pvQQovr1vpT5QlBYWR_1OthDUEI",
    authDomain: "dataapp-8bc6d.firebaseapp.com",
    databaseURL: "https://dataapp-8bc6d-default-rtdb.firebaseio.com",
    projectId: "dataapp-8bc6d",
    storageBucket: "dataapp-8bc6d.appspot.com",
    messagingSenderId: "1052775979865",
    appId: "1:1052775979865:web:b8de5ba5d832e93b18ca48"
  };
console.log(temp18)
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const dbRef = ref(getDatabase());
const auth = getAuth();
console.log("option1:"+temp5)

const quizData = [
    {
        //count: " ",
        page: "1/4",
        question: temp,
        a: temp1,
        b: temp2,
        c: temp3,
        d: temp4,
        correct: temp5,
    },
    {
        //count: " ",
        page: "2/4",
        question: temp6,
        a: temp7,
        b: temp8,
        c: temp9,
        d: temp10,
        correct: temp11,

    },
    {
        page: "3/4",
        question: temp12,
        a: temp13,
        b: temp14,
        c: temp15,
        d: temp16,
        correct: temp17,

    },
    {
        page: "4/4",
        question: temp18,
        a: temp19,
        b: temp20,
        c: temp21,
        d: temp22,
        correct: temp23,
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
    count=document.getElementById('count')?.innerText;
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
// console.log(quiz[0]);
onAuthStateChanged(auth, (user) => {
    // const user = userCredential.user;
       // var submit = document.getElementById('submit').value;
    //const uid = user.uid;
    if(user) {
        const question = quizData;
        console.log(question);
        document.getElementById('submit').addEventListener('click', function(){
            //alert("Test1");
            //alert(score);
            //console.log("Adb")
        
            update(ref(database, 'users/'+user.uid),{
                Quiz: question,
                score: score
            })
//console.log("test3");
//console.log(score1);
})
        
}
})
