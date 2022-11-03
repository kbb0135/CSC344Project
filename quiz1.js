
export const quizData = [
    {
        // count: " ",
        page: "1/4",
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Makeup Language",
        c: "Hyperloop Machine Language",
        d: "Hyper Tag Machine Linux",
        correct: "a",
    },
    {

        page: "2/4",
        question: "What is the <h1> element used for?",
        a: "Create a Home Page",
        b: "Create a Headline",
        c: "Create a Hyperlink",
        d: "Create a Heading",
        correct: "d",
    },
    {
        page: "3/4",
        question: "What is the <p> element used for?",
        a: "Create a different page",
        b: "Create a paragraph",
        c: "Create a Pie Chart",
        d: "Short for padding",
        correct: "b",
    },
    {
        page: "4/4",
        question: "What is used to create space around the elements content?",
        a: "Margin",
        b: "Padding",
        c: "Display",
        d: "align-text",
        correct: "b",
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
let currentQuiz = 0
 export let score = 0

// const timer = document.getElementById('count')


// const timer = document.getElementById('count')


loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    var count = 10;
var interval = setInterval(function(){
  document.getElementById('count').innerText=count;
  count--;
  if (count === 0){
    clearInterval(interval);
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
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">See Results</button> 
           `
           
       }
       
    }
    
})
export let score1 = score;


    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    
