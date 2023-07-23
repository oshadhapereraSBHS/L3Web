var questionNumber = 0;
var correctAnswerCount = 0;
var highScore = 0;
const questions = [
    "How many pieces are there on a chess board in total?", 
    "q2", 
    "q3", 
    "q4", 
    "q5", 
    "q6", 
    "q7", 
    "q8",
    "q9", 
    "q10"]
  
  const answers = [
    1, 
    1, 
    1, 
    1, 
    1, 
    1, 
    1, 
    1, 
    1, 
    1]
  
  const options = [
  ["o1", "o2", "o3", "o4"],
  ["o1 for 2", "o2 for 2", "o3 for 2", "o4 for 2"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  ["o1", "o2", "o3", "o4"],
  
  ]
function startQuiz(){
  
    document.getElementById("welcome").style.display = "none";
    document.getElementById("start").style.display = "none";
    document.getElementById("choose1").style.display = "block";
    document.getElementById("choose2").style.display = "block";
    document.getElementById("choose3").style.display = "block";
    document.getElementById("choose4").style.display = "block";
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

    if(questionNumber < questions.length-1){
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
    
    if(correctAnswerCount > Number(localStorage.getItem("highScore"))) {localStorage.setItem("highScore", correctAnswerCount)}
    document.getElementById("restart").style.display = "block";
      
    }
  
  }
  
  var givenAnswer = 0;
  function check(){
var validAnswer = true
        if(document.getElementById("choose1").checked == true){givenAnswer = 1;}
         else if(document.getElementById("choose2").checked == true){givenAnswer = 2;}
        else if(document.getElementById("choose3").checked == true){givenAnswer = 3;}
        else if(document.getElementById("choose4").checked == true){givenAnswer = 4;}
        else {
            validAnswer = false;
            alert("Please select an answer");
        }
        
        
        if(givenAnswer == answers[questionNumber]){
            correctAnswerCount++;
            document.getElementById("result").style.display = "block";
            document.getElementById("result").innerHTML = "Correct!";
            document.getElementById("nextQuestion").style.display = "block";
            document.getElementById("checkAnswer").style.display = "none";

            

            document.getElementsByClassName("answers")[givenAnswer-1].style.color = "green";







        } else if (validAnswer){
          document.getElementsByClassName("answers")[answers[questionNumber]-1].style.color = "green";  
          document.getElementsByClassName("answers")[givenAnswer-1].style.color = "red";
          document.getElementById("result").style.display = "block";
            document.getElementById("result").innerHTML = "Incorrect!";
            document.getElementById("nextQuestion").style.display = "block";
            document.getElementById("checkAnswer").style.display = "none";








        }
  }
  