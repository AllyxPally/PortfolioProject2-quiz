// Quiz
const quizData = [
    {
        question: 'What is the name of the princess who usually wears a pink dress in Super Mario?',
        options: ['Rose', 'Zelda', 'Peach', 'Megan'],
        right: 2
    },
    {
        question: 'Who is the author of Harry Potter?',
        options: ['Stephanie Meyer', 'J.K. Rowling', 'Paula Hawkins', 'Suzanne Collins'],
        right: 1
    },
    {
        question: 'Who won the FIFA Women´s World Cup 2023?',
        options: ['England', 'France', 'Australia', 'Spain'],
        right: 3
    },
    {
        question: 'Where were Frida Kahlo born?',
        options: ['Mexico', 'Argentina', 'Peru', 'Bolivia'],
        right: 0
    },
];

let avaliableQuestions = 0;
let score = 0;

// Function to display the question to the user
function displayQuestion() {
    const quizText = document.getElementById("quiz_text");
    quizText.textContent = quizData[avaliableQuestions].question;

    const options = document.querySelectorAll(".option");
    options.forEach((option, index) => {
        option.textContent = quizData[avaliableQuestions].options[index];
    });
    
    const feedback = document.getElementById("feedback");
    feedback.textContent = "";
}
// Function to check if the answer is right 
function checkAnswer(chosenAnswer) {

    const correctAnswer = quizData[avaliableQuestions].right
    const feedback = document.getElementById("feedback");
    if (chosenAnswer === correctAnswer) {
        feedback.textContent = "Right!";
        score++;
    } else {
        const answerValue = quizData[avaliableQuestions].options[correctAnswer]
        feedback.textContent = `Wrong! The correct answer is ${answerValue}`;
    }

    setTimeout (() => {
    avaliableQuestions++;
    
    if (avaliableQuestions < quizData.length) {
        displayQuestion();
    } else {
        const quizContainer = document.querySelector(".quiz_container");
        quizContainer.innerHTML = `<h2>You have finished the quiz!</h2>
        <p>Your result is ${score} out of ${quizData.length}</p>`;
    }
}, 1000);
}

displayQuestion();