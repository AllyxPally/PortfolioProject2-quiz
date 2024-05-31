// Quiz 
const quizData = [
    {
   question: 'What is the name of the princess who wears a pink dress in Super Mario?',
   options: ['Rose', 'Zelda', 'Peach', 'Megan'],
   right: '2',
},
{
    question: 'Who is the author of Harry Potter?',
    options: ['Stephanie Meyer', 'J.K. Rowling', 'Paula Hawkins', 'Suzanne Collins'],
    right: '1',  
},
{
    question: 'Who won the FIFA Women´s World Cup 2023?',
    options: ['England', 'France', 'Australia', 'Spain'],
    right:  '3', 
},
{
    question: 'Where were Frida Kahlo born?',
    options: ['Mexico', 'Argentina', 'Peru', 'Bolivia'],
    right: '0',
},
];

let validQuestion = 0; 
let rightAnswers = 0; 

function displayQuestion() {
    const quizText = document.getElementsByClassName("quiz_text");
    quizText.quizContent = quizData[validQuestion].quiz;
}
