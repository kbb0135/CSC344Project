export const cardData = [
    {
        page: "1/10",
        question: "Full form of HTML",
        answer: "HyperText Markup Language",
    },
    {
        page: "2/10",
        question: "Purpose of <li> tag",
        answer: "To define a list item",
    },
    {
        page: "3/10",
        question: "Tag that specifies path to an image",
        answer: "src",
    },
    {
        page: "4/10",
        question: "Attribute that defines size of an image",
        answer: "height and width",
    },
    {
        page: "5/10",
        question: "Language commonly used with HTML",
        answer: "JavaScript",
    },
    {
        page: "6/10",
        question: "Tag that refers to a JS code",
        answer: "<script>",
    },
    
    {
        page: "7/10",
        question: "Purpose of the type attribute",
        answer: "Indicate type of input control",
    },
    {
        page: "8/10",
        question: "Elemets that can have the same id",
        answer: "One",
    },
    {
        page: "9/10",
        question: "Symbol used before id attribute in CSS",
        answer: "#",
    },
    {
        page: "10/10",
        question: "Defines background color",
        answer: "background-color",
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
})