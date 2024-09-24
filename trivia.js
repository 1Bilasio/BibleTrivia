// Updated questions and answers
const questions = [
    {
        question: "Who helped Jesus to carry the cross?",
        answers: [
            {text: "Simon of Arimathea", correct: false},
            {text: "Simon of Cyrene", correct: true},
            {text: "Simon Peter", correct: false},
            {text: "Judas", correct: false},
        ]
    },
    {
        question: "Where was Jesus born?",
        answers: [
            {text: "Jerusalem", correct: false},
            {text: "Bethlehem", correct: true},
            {text: "Golgotha", correct: false},
            {text: "Egypt", correct: false},
        ]
    },
    {
        question: "Who was the first person to be born without sin?",
        answers: [
            {text: "Adam", correct: false},
            {text: "Eve", correct: false},
            {text: "Jesus", correct: true},
            {text: "Noah", correct: false},
        ]
    },
    {
        question: "Which is the longest book in the Bible?",
        answers: [
            {text: "Proverbs", correct: false},
            {text: "Ezekiel", correct: false},
            {text: "Isaiah", correct: false},
            {text: "Psalms", correct: true},
        ]
    },
    {
        question: "Who was the prophet who preached against the Israelites' social injustices?",
        answers: [
            {text: "Jeremiah", correct: false},
            {text: "Hosea", correct: false},
            {text: "Ezekiel", correct: false},
            {text: "Amos", correct: true},
        ]
    },
    {
        question: "Which biblical figure is often referred to as the 'Apostle to the Gentiles'?",
        answers: [
            {text: "James", correct: false},
            {text: "Peter", correct: false},
            {text: "Paul", correct: true},
            {text: "John", correct: false},
        ]
    },
    {
        question: "Who was the first king of Israel?",
        answers: [
            {text: "Saul", correct: true},
            {text: "Samuel", correct: false},
            {text: "Jeroboam", correct: false},
            {text: "Solomon", correct: false},
        ]
    },
    {
        question: "Which biblical figure is often associated with the parable of the Prodigal Son?",
        answers: [
            {text: "The prodigal son", correct: false},
            {text: "Jonah", correct: false},
            {text: "Jesus Christ", correct: true},
            {text: "Paul", correct: false},
        ]
    },
    {
        question: "Which biblical figure is often associated with the book of Revelation?",
        answers: [
            {text: "John the Baptist", correct: false},
            {text: "John", correct: true},
            {text: "Paul", correct: false},
            {text: "Jonah", correct: false},
        ]
    },
    {
        question: "What is the name of the apostle who was once called Saul?",
        answers: [
            {text: "James", correct: false},
            {text: "Peter", correct: false},
            {text: "Paul", correct: true},
            {text: "Saul", correct: false},
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Select HTML elements
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.ans-btn .btn');
const nextButton = document.getElementById('next-btn');
const resetButton = document.getElementById('reset-btn');

// Function to display a question
function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtons.forEach((button, index) => {
        button.textContent = question.answers[index].text;
        button.onclick = () => handleAnswer(question.answers[index].correct);
    });
}

// Function to handle answer click
function handleAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    nextButton.style.display = 'inline'; // Show next button
}

// Function to move to the next question or show results
function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none'; // Hide next button
    } else {
        showResults();
    }
}

// Function to show results
function showResults() {
    questionElement.textContent = `Quiz completed! Your score is ${score} out of ${questions.length}.`;
    answerButtons.forEach(button => button.style.display = 'none');
    nextButton.style.display = 'none';
    resetButton.style.display = 'inline'; // Show reset button
}

// Function to reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentQuestionIndex]);
    nextButton.style.display = 'none'; // Hide next button
    resetButton.style.display = 'none'; // Hide reset button
    answerButtons.forEach(button => button.style.display = 'inline');
}

// Event listeners
nextButton.addEventListener('click', showNextQuestion);
resetButton.addEventListener('click', resetQuiz);

// Initial question display
showQuestion(questions[currentQuestionIndex]);
nextButton.style.display = 'none'; // Hide next button initially
resetButton.style.display = 'none'; // Hide reset button initially

