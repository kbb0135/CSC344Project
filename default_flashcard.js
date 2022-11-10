export const cardData = [
    {
        question: "What is my name?",
        answer: "Charan"
    },
    {
        question: "What is Prem's name?",
        answer: "Prem"
    },
];

const card_question = document.getElementById('question')
const card_answer = document.getElementById('answer')

let currentCard = 0

function loadCard() {
    const currentCardData = cardData[currentCard]

    card_question.innerText = currentCardData.question
    card_answer.innerText = currentCardData.answer
}