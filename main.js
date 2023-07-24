function signUpPage() {
  //when sign up button is pressed, redirect to signup.html
  location.href = "signup.html";
}

//variables
var dropdown1Clicks = 1;
var dropdown2Clicks = 1;
var dropdown1Display = false;
var dropdown2Display = false;


window.onload = function () {
  //save how many times the dark mode icon was clicked
  localStorage.setItem("darkModeCount", Number(localStorage.getItem("darkModeCount")));
  localStorage.setItem("darkMode", localStorage.getItem("darkMode"));
  //if dark mode is pressed once, or in multiples of two after that, change to dark mode
  if (localStorage.getItem("darkModeCount") % 2 == 0) {
    darkModeChanges();
  }

  if (localStorage.getItem("darkMode") == "true") {
    //set main heading colors to white in dark mode
    document.getElementById("overview").style.color = "white";
    document.getElementById("forMembers").style.color = "white";
    document.getElementById("contact").style.color = "white";
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
    localStorage.setItem("darkMode", false)

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

//when a gallery or product image is clicked, open slideshow
function openOverlay() {
  document.getElementById("galleryOverlay").style.display = "block";
}

//when close icon is pressed, hide slideshow
function closeOverlay() {
  document.getElementById("galleryOverlay").style.display = "none";
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