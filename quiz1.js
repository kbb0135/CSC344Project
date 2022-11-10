
export const quizData = [
    {
        count: " ",
        page: "1/4",
        question: "What does HTML stand for?",
        a: "Hyper Text Markup Language",
        b: "Hyper Text Makeup Language",
        c: "Hyperloop Machine Language",
        d: "Hyper Tag Machine Linux",
        correct: "a",
    },
    {
        count: " ",
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
const home_button = document.getElementById('home')
let currentQuiz = 0
export let score = 0
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
        window.open('http://127.0.0.1:5500/home.html', "Thanks for Visiting!");
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
    document.getElementById('count').innerText=count;
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
console.log(score,"This is the score")
//export let score1 = score;
//alert("Pass1");
//console.log(wrongANS);

    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    
