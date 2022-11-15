import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js"; 
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
const db1 = getFirestore();
const docRef = doc(db1, "FlashCards", "Chapter1");
const docSnap = await getDoc(docRef);
if(docSnap.exists()) { 
 const cardData = [
    {
        question: docSnap.data().Question1,
        answer: docSnap.data().Answer1,
    },
    {
        question: docSnap.data().Question2,
        answer: docSnap.data().Answer2,
    },
    {
        question: docSnap.data().Question3,
        answer: docSnap.data().Answer3,
    },
    {
        question: docSnap.data().Question4,
        answer: docSnap.data().Answer4,
    },
    {
        question: docSnap.data().Question5,
        answer: docSnap.data().Answer5,
    },
    {
        question: docSnap.data().Question6,
        answer: docSnap.data().Answer6,
    },
    {
        question: docSnap.data().Question7,
        answer: docSnap.data().Answer7,
    },
];

const card_question = document.getElementById('question')
const card_answer = document.getElementById('answer')
const next_btn = document.getElementById('next')
const previous_btn = document.getElementById('previous')

const pageNum = document.getElementById('page')


// const speak_btn = document.getElementById('speak')



let currentCard = 0
let x;
loadCard()

function loadCard() {
    const currentCardData = cardData[currentCard]

    pageNum.innerText = currentCardData.page

    card_question.innerText = currentCardData.question
    x=currentCardData.question;
    card_answer.innerText = currentCardData.answer
}

next_btn.addEventListener("click", () => {
    currentCard++

    if(currentCard < cardData.length) {
        loadCard()
    }
})

previous_btn.addEventListener("click", () => {
    currentCard--;

    if(currentCard < cardData.length) {
        loadCard()
    }
})

console.log("test2")
console.log(x)
document.getElementById('speak').addEventListener("click", () => {
    function textToAudio() {
        // let msg = document.getElementById(card_question).value;
        let msg = x;
        console.log("msg")
        
        let speech = new SpeechSynthesisUtterance();
        speech.lang = "en-US";
        
        speech.text = msg;
        speech.volume = 1;
        speech.rate = 0.85;
        speech.pitch = 1;
        
        window.speechSynthesis.speak(speech);
    }
    textToAudio();
});
