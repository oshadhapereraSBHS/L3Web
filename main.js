//variables
var questionNumber = 0;
var correctAnswerCount = 0;
var highScore = 0;

//array for questions
const questions = [
  "How many pieces are there on a chess board in total?",
  "Which piece can only move diagonally?",
  "Which two pieces do you use to 'castle'?",
  "Which piece can a pawn not promote into?",
  "Which piece is used for en passant?",
  "What is the least number of moves needed for checkmate?",
  "What opening starts with c4?",
  "What is the first move of the Bird's Opening?",
  "How long was the longest known chess game?",
  "Which computer won the first game against a GM?"
]

//array for options given for each question
const options = [
  ["16", "32", "28", "64"],
  ["Pawn", "Rook", "Bishop", "Queen"],
  ["King & Rook", "Queen & Rook", "Two Rooks", "King & Queen"],
  ["King", "Queen", "Knight", "Bishop"],
  ["Queen", "Bishop", "King", "Pawn"],
  ["3", "2", "4", "6"],
  ["English Opening", "Scandinavian Opening", "French Defense", "Vienna Gambit"],
  ["c3", "d3", "f4", "e4"],
  ["307 moves", "171 moves", "269 moves", "195 moves"],
  ["Super Knight", "Deep Blue", "Still Knight", "Deep Thought"],

]

//array for answers
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


function next() {
  //when next is pressed, hide results and next button, and set colour of labels to blue
  document.getElementById("result").style.display = "none";
  document.getElementById("checkAnswer").style.display = "block";
  document.getElementById("nextQuestion").style.display = "none";
  document.getElementsByClassName("answers")[0].style.color = "#073B4C";
  document.getElementsByClassName("answers")[1].style.color = "#073B4C";
  document.getElementsByClassName("answers")[2].style.color = "#073B4C";
  document.getElementsByClassName("answers")[3].style.color = "#073B4C";

  if (questionNumber < questions.length - 1) {
    //when the question list in not finished, increase question number by 1
    //show next question and next set of options
    questionNumber++;
    document.getElementById("questions").innerHTML = questions[questionNumber];
    document.getElementById("option1").innerHTML = options[questionNumber][0];
    document.getElementById("option2").innerHTML = options[questionNumber][1];
    document.getElementById("option3").innerHTML = options[questionNumber][2];
    document.getElementById("option4").innerHTML = options[questionNumber][3];

  } else {
    //if questions are finished hide labels, inputs and buttons expect overall result and restart button
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
    //calculate how many answers were correct
    document.getElementById("result").innerHTML = "You got " + correctAnswerCount + " answers correct, out of " + questions.length + " questions.";
    //show high score
    document.getElementById("result2").innerHTML = "Your high score is " + localStorage.getItem("highScore") + "."
    document.getElementById("checkAnswer").style.display = "none";
    //if current score is bigger than high score, save new score as high score
    if (correctAnswerCount > Number(localStorage.getItem("highScore"))) {
      localStorage.setItem("highScore", correctAnswerCount)
    }
    document.getElementById("restart").style.display = "block";

  }

}

var givenAnswer = 0;

function check() {
  var validAnswer = true
  //set givenAnswer based on input chosen
  if (document.getElementById("choose1").checked == true) {
    givenAnswer = 1;
  } else if (document.getElementById("choose2").checked == true) {
    givenAnswer = 2;
  } else if (document.getElementById("choose3").checked == true) {
    givenAnswer = 3;
  } else if (document.getElementById("choose4").checked == true) {
    givenAnswer = 4;
  } else {
    //if answer not chosen, ask for one
    validAnswer = false;
    alert("Please select an answer");
  }


  if (givenAnswer == answers[questionNumber]) {
    //if given answer is correct, increase correct answer count by 1
    correctAnswerCount++;
    //show correct message and show next button

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Correct!";
    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("checkAnswer").style.display = "none";
    //change chosen answer color to green
    document.getElementsByClassName("answers")[givenAnswer - 1].style.color = "green";

  } else if (validAnswer) {
    //if wrong answer was chosen, change current answer color to red
    document.getElementsByClassName("answers")[answers[questionNumber] - 1].style.color = "green";
    //change correct answer to green
    document.getElementsByClassName("answers")[givenAnswer - 1].style.color = "red";
    //show incorrect message and show next button
    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = "Incorrect!";
    document.getElementById("nextQuestion").style.display = "block";
    document.getElementById("checkAnswer").style.display = "none";

  }
}

function signUpPage() {
  //when sign up button is pressed, redirect to signup.html
  location.href = "signup.html";
}

//variables
var dropdown1Clicks = 1;
var dropdown2Clicks = 1;
var dropdown1Display = false;
var dropdown2Display = false;

function quizStart() {
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
  document.getElementById("start").style.display = "none";
  //show question 1 and options for question 1
  document.getElementById("questions").innerHTML = questions[0];
  document.getElementById("option1").innerHTML = options[0][0];
  document.getElementById("option2").innerHTML = options[0][1];
  document.getElementById("option3").innerHTML = options[0][2];
  document.getElementById("option4").innerHTML = options[0][3];
}
window.onload = function () {

  //save how many times the dark mode icon was clicked
  localStorage.setItem("darkModeCount", Number(localStorage.getItem("darkModeCount")));
  if(localStorage.getItem("darkModeCount") == 0){
    localStorage.setItem("darkModeCount", 1);
  }
  localStorage.setItem("darkMode", localStorage.getItem("darkMode"));
  //if dark mode is pressed once, or in multiples of two after that, change to dark mode
  if (localStorage.getItem("darkModeCount") % 2 == 0 || localStorage.getItem("darkModeCount") == null) {
    darkModeChanges();
  }

  if (localStorage.getItem("darkMode") == "true") {
    //set main heading colors to white in dark mode
    document.getElementById("overview").style.color = "white";
    document.getElementById("forMembers").style.color = "white";
    document.getElementById("contact").style.color = "white";
  }





  //update the stored quantities by storing the values in the cart. This allows users to change quantities in the cart page.

  document.getElementById("totalValue").innerHTML = "$" + (localStorage.getItem("quantity1") * 19 +
    localStorage.getItem("quantity2") * 19 +
    localStorage.getItem("quantity3") * 19 +
    localStorage.getItem("quantity4") * 4 +
    localStorage.getItem("quantity5") * 4 +
    localStorage.getItem("quantity6") * 4)
  //set all quantities to stored values.
  document.getElementById("quantity1").value = localStorage.getItem("quantity1");
  document.getElementById("quantity2").value = localStorage.getItem("quantity2");
  document.getElementById("quantity3").value = localStorage.getItem("quantity3");
  document.getElementById("quantity4").value = localStorage.getItem("quantity4");
  document.getElementById("quantity5").value = localStorage.getItem("quantity5");
  document.getElementById("quantity6").value = localStorage.getItem("quantity6");

  //if an element has a value of null, set it to 0.
  if (localStorage.getItem("quantity1") == null) {
    document.getElementById("quantity1").value = 0
  }
  if (localStorage.getItem("quantity2") == null) {
    document.getElementById("quantity2").value = 0
  }
  if (localStorage.getItem("quantity3") == null) {
    document.getElementById("quantity3").value = 0
  }
  if (localStorage.getItem("quantity4") == null) {
    document.getElementById("quantity4").value = 0
  }
  if (localStorage.getItem("quantity5") == null) {
    document.getElementById("quantity5").value = 0
  }
  if (localStorage.getItem("quantity6") == null) {
    document.getElementById("quantity6").value = 0
  }
  quizStart();
}
//run change font size function every 0.2 seconds
setInterval(changeFontSize, 200);

function changeFontSize() {

  //if window width is less than 880px (this is when for members heading goes into two lines), change font size of nav elements to 20px.
  if (window.innerWidth < 910) {
    document.getElementById("forMembers").style.fontSize = "18px";
    document.getElementById("overview").style.fontSize = "18px";
    document.getElementById("contact").style.fontSize = "18px";
  } else {
    //if window width is greater than 880px, change font size of nav elements to normal size  
    document.getElementById("forMembers").style.fontSize = "26.5px";
    document.getElementById("overview").style.fontSize = "26.5px";
    document.getElementById("contact").style.fontSize = "26.5px";
  }

}

function darkModeChanges() {
  if (localStorage.getItem("darkModeCount") % 2 == 0) {
    //wen dark mode us on, change dark incon to light icon
    //change icon colors to white
    localStorage.setItem("darkMode", "true")
    document.getElementById("logo").src = "images/logoDark.svg"
    document.getElementById("dark").src = "images/light.png"
    document.getElementById("dark").title = "Switch to Light Mode"
    document.getElementById("cart").src = "images/cartDark.png";
    document.getElementById("itemNumber").style.color = "white";
    document.getElementById("dark").style.width = "60%";
    //change background colors to black and nav bar links to white
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.9)";

    document.getElementById("html").style.background = "none";

    document.body.style.color = "rgba(0, 0, 0, 0.8)"
    document.getElementById("overview").style.color = "white";
    document.getElementById("forMembers").style.color = "white";
    document.getElementById("contact").style.color = "white";
    document.getElementsByClassName("links")[0].style.color = "white"
    document.getElementsByClassName("links")[1].style.color = "white"
    document.getElementsByClassName("links")[2].style.color = "white"
    document.getElementsByClassName("links")[3].style.color = "white"
    document.getElementsByClassName("links")[4].style.color = "white"
    document.getElementsByClassName("links")[5].style.color = "white"
    document.getElementsByClassName("links")[6].style.color = "white"
    document.getElementsByClassName("links")[7].style.color = "white"
    document.getElementById("forMembers").style.color = "white"
    if (dropdown1Display) {
      //add box shadow when dropdown 1 is clicked
      document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 white"
    }
    if (dropdown2Display) {
      //add box shadow when dropdown 2 is clicked
      document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 white"
    }


    document.getElementById("dropdownItems2").style.boxShadow = "2px 2px 1px 0 white"
    document.getElementById("dropdownItems1").style.boxShadow = "2px 2px 1px 0 white"
  } else {
    //when dark mode is turned off, reload page with light mode
    localStorage.setItem("darkMode", "false")

    location.reload();

  }
}

function darkModeOn() {
  //when dark mode is turned on, increase dark mode count by 1
  localStorage.setItem("darkModeCount", Number(localStorage.getItem("darkModeCount")) + 1);
  darkModeChanges();

}

function dropdown1() {
  //when dropdown 1 is clicked, set dropdown 2 count to  and increase dropdown 1 count by 1
  dropdown2Clicks = 1;
  dropdown1Clicks++;
  dropdown2Display = false;
  if (localStorage.getItem("darkMode") == "true") {
    //when dropdown is clicked in dark mode, show links in white
    document.getElementsByClassName("links")[0].style.color = "white"
    document.getElementsByClassName("links")[1].style.color = "white"
    document.getElementsByClassName("links")[2].style.color = "white"
    document.getElementsByClassName("links")[3].style.color = "white"

  }
  if (dropdown1Clicks % 2 === 0) {
    dropdown1Display = true;
    //when dropdown 1 is clicked, show dropdown 1 items
    document.getElementById("dropdownItems1").style.display = "grid";

    document.getElementById("forMembers").style.boxShadow = "none";
    document.getElementById("dropdownItems2").style.display = "none";
    if (localStorage.getItem("darkMode") == "true") {
      //when dark mode is turned on, change nav links ot white
      document.getElementById("forMembers").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
      document.getElementById("overview").style.color = "white"
      document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 white"
      document.getElementById("dropdownItems1").style.boxShadow = "2px 2px 1px 0 white"
      document.getElementsByClassName("links")[0].style.color = "white"
      document.getElementsByClassName("links")[1].style.color = "white"
      document.getElementsByClassName("links")[2].style.color = "white"
      document.getElementsByClassName("links")[3].style.color = "white"
      document.getElementsByClassName("links")[4].style.color = "white"
      document.getElementsByClassName("links")[5].style.color = "white"
      document.getElementsByClassName("links")[6].style.color = "white"
      document.getElementsByClassName("links")[7].style.color = "white"

    } else {
      //when light mode is turned on, change clicked linked to blue and others to grey
      document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 black";
      document.getElementById("overview").style.color = "#073B4C"
      document.getElementById("forMembers").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
    }


  } else {
    dropdown1Display = false;
    //if dropdown is not pressed, hide dropdown items
    document.getElementById("dropdownItems1").style.display = "none";

    document.getElementById("overview").style.boxShadow = "none"
    if (localStorage.getItem("darkMode") == "false" || localStorage.getItem("darkMode") == null) {
      //if dark light mode is selected, change main headings to blue
      document.getElementById("forMembers").style.color = "#073B4C"
      document.getElementById("overview").style.color = "#073B4C"
      document.getElementById("contact").style.color = "#073B4C"
    }
  }



}

//above structure is also used for the second dropdown menu
function dropdown2() {
  dropdown1Display = false;
  dropdown1Clicks = 1;
  dropdown2Clicks++;
  if (localStorage.getItem("darkMode") == "true") {
    document.getElementsByClassName("links")[4].style.color = "white"
    document.getElementsByClassName("links")[5].style.color = "white"
    document.getElementsByClassName("links")[6].style.color = "white"
    document.getElementsByClassName("links")[7].style.color = "white"
  }
  if (dropdown2Clicks % 2 === 0) {


    dropdown2Display = true;
    document.getElementById("dropdownItems2").style.display = "grid";
    document.getElementById("dropdownItems1").style.display = "none";
    document.getElementById("overview").style.boxShadow = "none";
    if (localStorage.getItem("darkMode") == "true") {


      document.getElementById("overview").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
      document.getElementById("forMembers").style.color = "white"
      document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 white"
      document.getElementById("dropdownItems2").style.boxShadow = "2px 2px 1px 0 white"

    } else {

      document.getElementById("overview").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
      document.getElementById("forMembers").style.color = "#073B4C"
      document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 black"
    }
  } else {
    dropdown2Display = false;
    document.getElementById("dropdownItems2").style.display = "none";
    document.getElementById("forMembers").style.boxShadow = "none"
    if (localStorage.getItem("darkMode") == "false" || localStorage.getItem("darkMode") == null) {
      document.getElementById("overview").style.color = "#073B4C"
      document.getElementById("forMembers").style.color = "#073B4C"
      document.getElementById("contact").style.color = "#073B4C"

    }
  }
}
var overlayOpen = false;
//when a gallery or product image is clicked, open slideshow
function openOverlay() {
  document.getElementById("galleryOverlay").style.display = "block";
  overlayOpen = true;
}

//when close icon is pressed, hide slideshow
function closeOverlay() {
  document.getElementById("galleryOverlay").style.display = "none";
  overlayOpen = false;
}

//set slideIndex to 1
var slideIndex = 1;
showSlides(slideIndex);

//when right arrow is clicked, slideindex is increased by 1
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//start slideshow from the image that was clicked on
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//function for lopoing through slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  //when slideshow finished, it loops back to start
  if (n > slides.length) {
    slideIndex = 1
  }
  //when left button is pressed on the first slide, it goes back to the last slide
  if (n < 1) {
    slideIndex = slides.length
  }
  //looping through slide when left/right buttons are pressed
  for (i = 0; i < slides.length; i++) {
    //previous slides are hidden
    slides[i].style.display = "none";
  }
  //current slides are shown
  slides[slideIndex - 1].style.display = "block";


}

//redirect to index.html when logo image is clicked
function home() {
  location.href = "index.html";
}

//when hovering over image 1 in gallery, change image to description
function hover1() {
  document.getElementById("img1").src = "images/aboutUs1Hover.jpg"
}

//when mouse leaves image, restore original image
function hover1Stop() {
  document.getElementById("img1").src = "images/aboutUs1.jpg"

}

//above structure is repeated for each image
function hover2() {
  document.getElementById("img2").src = "images/aboutUs2Hover.jpg"
}

function hover2Stop() {
  document.getElementById("img2").src = "images/aboutUs2.jpg"

}

function hover3() {
  document.getElementById("img3").src = "images/aboutUs1Hover.jpg"
}

function hover3Stop() {
  document.getElementById("img3").src = "images/aboutUs3.jpg"

}

function hover4() {
  document.getElementById("img4").src = "images/aboutUs2Hover.jpg"
}

function hover4Stop() {
  document.getElementById("img4").src = "images/aboutUs4.jpg"

}

function hover5() {
  document.getElementById("img5").src = "images/aboutUs5Hover.jpg"
}

function hover5Stop() {
  document.getElementById("img5").src = "images/aboutUs5.jpg"

}

function hover6() {
  document.getElementById("img6").src = "images/aboutUs6Hover.jpg"
}

function hover6Stop() {
  document.getElementById("img6").src = "images/aboutUs6.jpg"

}

function hover7() {
  document.getElementById("img7").src = "images/aboutUs7Hover.jpg"
}

function hover7Stop() {
  document.getElementById("img7").src = "images/aboutUs7.jpg"

}

function hover8() {
  document.getElementById("img8").src = "images/aboutUs8Hover.jpg"
}

function hover8Stop() {
  document.getElementById("img8").src = "images/aboutUs8.jpg"

}




function contactSubmit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  //when contact form is submitted, ask for name, email and message is they are not filled
  if (name = null || name == "") {
    alert("Please enter your name");
  } else if (email = null || email == "") {
    alert("Please enter your email");
  } else if (message = null || message == "") {
    alert("Please enter your message");
  } else {
    //if required fields are filled, hide form and show thank you message using name provided
    var name = document.getElementById("name").value;

    document.getElementById("contactForm").style.display = "none";
    document.getElementById("contactReceived").style.display = "block";
    document.getElementById("contactReceived").innerHTML = "Thank you " + name + ", we will get back to you as soon as possible.";
  }


}



function signUpSubmit() {
  var signUpName = document.getElementById("signUpName").value;
  var signUpTutor = document.getElementById("signUpTutor").value;
  //when sign up form is submitted, ask for name and tutor class if these are filled
  if (signUpName = null || signUpName == "") {
    alert("Please enter your name");
  } else if (signUpTutor = null || signUpTutor == "") {
    alert("Please enter your tutor class");
  } else {
    //if required info are submitted, show thank you message
    var signUpName = document.getElementById("signUpName").value;

    document.getElementById("signUpForm").style.display = "none";
    document.getElementById("signUpReceived").style.display = "block";
    document.getElementById("signUpReceived").innerHTML = "Thank you for your interest in joining the chess club, " + signUpName + ". All you have to do now is turn up to chess club next Tuesday in 6P.";
  }


}


function logoChange1() {
  if (localStorage.getItem("darkMode") == "true") {
    document.getElementById("logo").src = "images/logoDark1.svg";
  } else {
    document.getElementById("logo").src = "images/logo1.svg";

  }

}

function logoChange2() {
  if (localStorage.getItem("darkMode") == "true") {
    document.getElementById("logo").src = "images/logoDark.svg";
  } else {
    document.getElementById("logo").src = "images/logo.svg";

  }

}

//redirect to cart.html when cart icon is pressed
function cartPage() {
  location.href = "cart.html";
}


function checkout() {


  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  //when checkout button is pressed, ask for names and email if these are not filled
  if (firstName = null || firstName == "") {
    alert("Please enter your first name");
  } else if (lastName = null || lastName == "") {
    alert("Please enter your last email");
  } else if (email = null || email == "") {
    alert("Please enter your email");
  } else {
    //if required fields are filled, show thank you message and reset cart quantities to 0
    document.getElementById("form4").innerHTML = "Thank you for shopping with us!";
    document.getElementById("form5").style.display = "none";
    localStorage.setItem("quantity1", 0);
    localStorage.setItem("quantity2", 0);
    localStorage.setItem("quantity3", 0);
    localStorage.setItem("quantity4", 0);
    localStorage.setItem("quantity5", 0);
    localStorage.setItem("quantity6", 0);

  }
}