// Array containing quiz questions, answer choices, and correct answers
const quiz = [
  {
    question: "What does HTML stand for?",
    choices: {
      A: "Hyper Text Markup Language",
      B: "Home Tool Markup Language",
      C: "Hyperlinks Text Mark Language"
    },
    answer: "A"
  },
  {
    question: "Which language is used for styling?",
    choices: {
      A: "HTML",
      B: "JavaScript",
      C: "CSS"
    },
    answer: "C"
  },
  {
    question: "Which language makes websites interactive?",
    choices: {
      A: "CSS",
      B: "JavaScript",
      C: "HTML"
    },
    answer: "B"
  }
];

// Keeps track of the current question
let index = 0;

// Stores the player's score
let score = 0;

// Timer starting value
let timeLeft = 10;

// Variable to control the timer
let timer;


// Starts the countdown timer
function startTimer() {

  clearInterval(timer); // Stop previous timer
  timeLeft = 10;

  document.getElementById("timer").innerText = "Time Left: " + timeLeft;

  enableButtons(); // Enable answer buttons

  // Runs every second
  timer = setInterval(() => {

    timeLeft--;

    document.getElementById("timer").innerText = "Time Left: " + timeLeft;

    if (timeLeft === 0) {

      clearInterval(timer);

      document.getElementById("result").innerText = "Time's up!";

      disableButtons();
    }

  }, 1000);
}


// Loads the question and answer choices
function loadQuestion() {

  document.getElementById("question").innerText = quiz[index].question;

  document.getElementById("A").innerText = quiz[index].choices.A;
  document.getElementById("B").innerText = quiz[index].choices.B;
  document.getElementById("C").innerText = quiz[index].choices.C;

  document.getElementById("result").innerText = "";

  startTimer();
}


// Checks if the selected answer is correct
function checkAnswer(choice) {

  clearInterval(timer);
  disableButtons();

  if (choice === quiz[index].answer) {

    score++;

    document.getElementById("score").innerText = "Score: " + score;

    document.getElementById("result").innerText = "Correct!";

  } else {

    document.getElementById("result").innerText = "Wrong!";

  }
}


// Moves to the next question
function nextQuestion() {

  index++;

  if (index < quiz.length) {

    loadQuestion();

  } else {

    clearInterval(timer);

    alert("Quiz Finished! Your Score: " + score);

  }
}


// Reloads the page to restart the quiz
function resetQuiz() {

  location.reload();

}


// Disables answer buttons
function disableButtons() {

  document.getElementById("A").disabled = true;
  document.getElementById("B").disabled = true;
  document.getElementById("C").disabled = true;

}


// Enables answer buttons
function enableButtons() {

  document.getElementById("A").disabled = false;
  document.getElementById("B").disabled = false;
  document.getElementById("C").disabled = false;

}


// Toggles dark mode
function toggleDarkMode() {

  document.body.classList.toggle("dark");

}


// Loads the first question when the page opens
loadQuestion();