export const cardData = [
    {
        question: "What is my name?",
        answer: "Charan",
    },
    {
        question: "What is Prem's name?",
        answer: "Prem",
    },
];

const card_question = document.getElementById('question')
const card_answer = document.getElementById('answer')
const next_btn = document.getElementById('next')
const previous_btn = document.getElementById('previous')

let currentCard = 0

loadCard()

function loadCard() {
    const currentCardData = cardData[currentCard]

    card_question.innerText = currentCardData.question
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