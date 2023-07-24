var questionNumber = 0;
var correctAnswerCount = 0;
var highScore = 0;
const questions = [
  "How many pieces are there on a chess board in total?",
  "Which piece can only move diagonally?",
  "Which two pieces do you use to 'castle'?",
  "Which piece can a pawn not promote into?",
  "Which piece is used for en passant?",
  "What is the least number of moves needed for checkmate?",
  "What opening starts with c4?",
  "What is the first move of the Bird's Opening?",
  "How many moves where there in the longest known chess game?",
  "Which computer won the first game against a GM?"
]
const options = [
  ["16", "32", "28", "64"],
  ["Pawn", "Rook", "Bishop", "Queen"],
  ["King & Rook", "Queen & Rook", "Two Rooks", "King & Queen"],
  ["King", "Queen", "Knight", "Bishop"],
  ["Queen", "Bishop", "King", "Pawn"],
  ["3", "2", "4", "6"],
  ["English Opening", "Scandinavian Opening", "French Defense", "Vienna Gambit"],
  ["c3", "d3", "f4", "e4"],
  ["307", "171", "269", "195"],
  ["Super Knight", "Deep Blue", "Still Knight", "Deep Thought"],

]

const answers = [
  2,
  3,
  1,
  1,
  4,
  2,
  1,
  3,
  3,
  4
]


window.onload = function () {


  document.getElementById("choose1").style.display = "block";
  document.getElementById("choose2").style.display = "block";
  document.getElementById("choose3").style.display = "block";
  document.getElementById("choose4").style.display = "block";
  document.getElementById("option1").style.display = "block";
  document.getElementById("option2").style.display = "block";
  document.getElementById("option3").style.display = "block";
  document.getElementById("option4").style.display = "block";
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementById("checkAnswer").style.display = "block";
  document.getElementById("questions").innerHTML = questions[0];
  document.getElementById("option1").innerHTML = options[0][0];
  document.getElementById("option2").innerHTML = options[0][1];
  document.getElementById("option3").innerHTML = options[0][2];
  document.getElementById("option4").innerHTML = options[0][3];

}

function next() {
  document.getElementById("result").style.display = "none";
  document.getElementById("checkAnswer").style.display = "block";
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementsByClassName("answers")[0].style.color = "#073B4C";
  document.getElementsByClassName("answers")[1].style.color = "#073B4C";
  document.getElementsByClassName("answers")[2].style.color = "#073B4C";
  document.getElementsByClassName("answers")[3].style.color = "#073B4C";

  if (questionNumber < questions.length - 1) {
    questionNumber++;
    document.getElementById("questions").innerHTML = questions[questionNumber];
    document.getElementById("option1").innerHTML = options[questionNumber][0];
    document.getElementById("option2").innerHTML = options[questionNumber][1];
    document.getElementById("option3").innerHTML = options[questionNumber][2];
    document.getElementById("option4").innerHTML = options[questionNumber][3];

  } else {
    document.getElementById("questions").style.display = "none";
    document.getElementById("nextQuestion").style.display = "none";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("option4").style.display = "none";
    document.getElementById("choose1").style.display = "none";
    document.getElementById("choose2").style.display = "none";
    document.getElementById("choose3").style.display = "none";
    document.getElementById("choose4").style.display = "none";
    document.getElementById("result").style.display = "block";

    document.getElementById("result2").style.display = "block";
    document.getElementById("result").innerHTML = "You got " + correctAnswerCount + " answers correct, out of " + questions.length + " questions.";
    document.getElementById("result2").innerHTML = "Your high score is " + localStorage.getItem("highScore") + "."

    document.getElementById("checkAnswer").style.display = "none";

    if (correctAnswerCount > Number(localStorage.getItem("highScore"))) {
      localStorage.setItem("highScore", correctAnswerCount)
    }
    document.getElementById("restart").style.display = "block";

  }

}

var givenAnswer = 0;

function check() {
  var validAnswer = true
  if (document.getElementById("choose1").checked == true) {
    givenAnswer = 1;
  } else if (document.getElementById("choose2").checked == true) {
    givenAnswer = 2;
  } else if (document.getElementById("choose3").checked == true) {
    givenAnswer = 3;
  } else if (document.getElementById("choose4").checked == true) {
    givenAnswer = 4;
  } else {
    validAnswer = false;
    alert("Please select an answer");
  }


  if (givenAnswer == answers[questionNumber]) {
    correctAnswerCount++;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Correct!";
    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("checkAnswer").style.display = "none";



    document.getElementsByClassName("answers")[givenAnswer - 1].style.color = "green";







  } else if (validAnswer) {
    document.getElementsByClassName("answers")[answers[questionNumber] - 1].style.color = "green";
    document.getElementsByClassName("answers")[givenAnswer - 1].style.color = "red";
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Incorrect!";
    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("checkAnswer").style.display = "none";








  }
}