  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getDatabase,set, ref,update, child, get,push} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
  import { getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
  const firebaseConfig = {
      apiKey: "AIzaSyD4pas0pvQQovr1vpT5QlBYWR_1OthDUEI",
      authDomain: "dataapp-8bc6d.firebaseapp.com",
      databaseURL: "https://dataapp-8bc6d-default-rtdb.firebaseio.com",
      projectId: "dataapp-8bc6d",
      storageBucket: "dataapp-8bc6d.appspot.com",
      messagingSenderId: "1052775979865",
      appId: "1:1052775979865:web:b8de5ba5d832e93b18ca48"
    };
  let tempQues, tempAns;
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const dbRef = ref(getDatabase());
  const auth = getAuth();
  let quest, answ;
  let k = sessionStorage.getItem("i");
  let l = sessionStorage.getItem("j");
  
var contentArray = sessionStorage.getItem('items') ? JSON.parse(sessionStorage.getItem('items')) : [];
//The place where i have to make sure that file updates are gonna happen suc as push set ref
document.getElementById("save_card").addEventListener("click", () => {
  addFlashcard();
});

document.getElementById("delete_cards").addEventListener("click", () => {
  sessionStorage.clear();
  flashcards.innerHTML = '';
  contentArray = [];
});

document.getElementById("show_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "block";
});

document.getElementById("close_card_box").addEventListener("click", () => {
  document.getElementById("create_card").style.display = "none";
});

let flashcardMaker = (text, delThisIndex) => {
  const flashcard = document.createElement("div");
  const question = document.createElement('h2');
  const answer = document.createElement('h2');
  const del = document.createElement('i');

  flashcard.className = 'flashcard';

  question.setAttribute("style", "border-top:1px solid red; padding: 15px; margin-top:30px");
  question.textContent = text.my_question;
  quest = question.textContent;
  sessionStorage.setItem("i",text.my_question)
  console.log(quest);

  answer.setAttribute("style", "text-align:center; display:none; color:red");
  answer.textContent = text.my_answer;
  answ = answer.textContent
  console.log(text.my_answer);

  del.className = "fas fa-minus";
  del.addEventListener("click", () => {
    contentArray.splice(delThisIndex, 1);
    sessionStorage.setItem('items', JSON.stringify(contentArray));
    window.location.reload();
  })

  flashcard.appendChild(question);
  flashcard.appendChild(answer);
  flashcard.appendChild(del);

  flashcard.addEventListener("click", () => {
    if(answer.style.display == "none")
      answer.style.display = "block";
    else
      answer.style.display = "none";
  })

  document.querySelector("#flashcards").appendChild(flashcard);
}

contentArray.forEach(flashcardMaker);

let addFlashcard = () => {
  const question = document.querySelector("#question");
  const answer = document.querySelector("#answer");

  let flashcard_info = {
    'my_question' : question.value,
    'my_answer'  : answer.value
  }

  contentArray.push(flashcard_info);
  sessionStorage.setItem('items', JSON.stringify(contentArray));
  flashcardMaker(contentArray[contentArray.length - 1], contentArray.length - 1);
  question.value = "";
  answer.value = "";
}
onAuthStateChanged(auth, (user) => {
  //const uid = user.uid;
  if(user) {
      const uid = user.uid;
      get(child(dbRef, `users/${uid}`)).then((snapshot) => {
if (snapshot.exists()) {
  console.log(snapshot.val());
  document.getElementById('save_card').addEventListener('click', function(){
    console.log("test1")
    function writeNewPost(uid, question, answer) {
       const db = getDatabase();
       console.log("test2")
       //let pQuestion = quest;
       console.log("question:"+quest);
       const postData = {
        question: quest,
        answer: answ
       };
       const newPostKey = push(child(ref(db), 'posts')).key;
       const updates ={};
       //updates['/posts/'+newPostKey] = postData;
       updates['/FlashCard/' + uid + '/' + newPostKey] = postData;
       console.log("I am here");
       return update(ref(db), updates);
    }
    writeNewPost(uid, question, answer);
})
}
else {
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