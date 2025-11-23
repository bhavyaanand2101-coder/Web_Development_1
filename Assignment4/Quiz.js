// ===============================
//  QUIZ QUESTIONS ARRAY (10 Questions)
// ===============================
const quizQuestions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red Planet?", answer: "mars" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "william shakespeare" },
    { question: "What is the largest ocean on Earth?", answer: "pacific ocean" },
    { question: "What is 5 multiplied by 6?", answer: "30" },
    { question: "What gas do plants absorb from the atmosphere?", answer: "carbon dioxide" },
    { question: "What is the chemical symbol for water?", answer: "h2o" },
    { question: "Who is known as the Father of Computers?", answer: "charles babbage" },
    { question: "In which year did World War II end?", answer: "1945" },
    { question: "What is the fastest land animal?", answer: "cheetah" }
];


// ===============================
//  FUNCTION TO RUN THE QUIZ
// ===============================
function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        if (userAnswer === null) {
            alert("Quiz cancelled.");
            return;
        }

        // Normalize input
        userAnswer = userAnswer.toLowerCase().trim();

        // Check answer
        if (userAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert("Incorrect ❌\nCorrect answer: " + quizQuestions[i].answer);
        }
    }

    // Final score
    alert("Quiz Completed! 🎯\nYour Score: " + score + " / " + quizQuestions.length);
}
