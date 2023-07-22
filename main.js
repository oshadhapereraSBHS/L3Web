function signUpPage() {
  location.href = "signup.html";
}
var dropdown1Clicks = 1;
var dropdown2Clicks = 1;
var darkModeCount = 1;
localStorage.setItem("darkMode", "false");
var darkMode = localStorage.getItem("darkMode");
function darkModeOn(){
darkModeCount++;

if(darkModeCount % 2 == 0){
  darkMode = true;
  document.getElementById("logo").src = "images/logoDark.png"
  document.getElementById("dark").src = "images/light.png"
  document.getElementById("dark").style.width = "60%";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  document.getElementById("html").style.background = "none";
  document.getElementById("contactDiv").style.backgroundColor = "rgba(255, 255, 255, 0.1)";
  document.body.style.color = "rgba(255, 255, 255, 0.9)"
  document.getElementById("overview").style.color = "white";
  document.getElementById("forMembers").style.color = "white";
  document.getElementById("contact").style.color = "white";
} else {
  darkMode = false;
  document.getElementById("logo").src = "images/logo.png"
  document.getElementById("dark").src = "images/dark.png"
  document.getElementById("dark").style.width = "60%";
  document.body.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  document.getElementById("html").style.background = "none";
  document.getElementById("contactDiv").style.backgroundColor = "rgba(0, 0, 0, 0)";
  document.body.style.color = "rgba(0, 0, 0, 0.9)"
  document.getElementById("overview").style.color = "#073B4C"
  document.getElementById("forMembers").style.color = "#073B4C"
  document.getElementById("contact").style.color = "#073B4C"
  document.getElementById("html").style.backgroundImage = "url('images/bg.png')"
}

}
function dropdown1() {
  dropdown2Clicks = 1;
  dropdown1Clicks++;
  if(darkMode == true){
    document.getElementsByClassName("links")[0].style.color = "white"
    document.getElementsByClassName("links")[1].style.color = "white"
    document.getElementsByClassName("links")[2].style.color = "white"
}
  if (dropdown1Clicks % 2 === 0) {
    document.getElementById("dropdownItems1").style.display = "grid";
    document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 black";
    document.getElementById("forMembers").style.boxShadow = "none";
    
    document.getElementById("dropdownItems2").style.display = "none";
    if(darkMode == false){
      document.getElementById("overview").style.color = "#073B4C"
      document.getElementById("forMembers").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
  
    }else {
      document.getElementById("forMembers").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
      document.getElementById("overview").style.color = "white"
      document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 white"
      document.getElementById("dropdownItems1").style.boxShadow = "2px 2px 1px 0 white"

    }
    
    
  } else {
    document.getElementById("dropdownItems1").style.display = "none";

    document.getElementById("overview").style.boxShadow = "none"
    if(darkMode == false){
    document.getElementById("forMembers").style.color = "#073B4C"
    document.getElementById("overview").style.color = "#073B4C"
    document.getElementById("contact").style.color = "#073B4C"
  }
}



}

function dropdown2() {
  dropdown1Clicks = 1;
  dropdown2Clicks++;
  if(darkMode == true){
    document.getElementsByClassName("links")[3].style.color = "white"
    document.getElementsByClassName("links")[4].style.color = "white"
    document.getElementsByClassName("links")[5].style.color = "white"
}
  if (dropdown2Clicks % 2 === 0) {

    document.getElementById("dropdownItems2").style.display = "grid";
    document.getElementById("dropdownItems1").style.display = "none";
    document.getElementById("overview").style.boxShadow = "none";
    if(darkMode == false){
    document.getElementById("overview").style.color = "#999"
    document.getElementById("contact").style.color = "#999"
    document.getElementById("forMembers").style.color = "#073B4C"
    document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 black"

    } else {
      document.getElementById("overview").style.color = "#999"
      document.getElementById("contact").style.color = "#999"
      document.getElementById("forMembers").style.color = "white"
      document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 white"
      document.getElementById("dropdownItems2").style.boxShadow = "2px 2px 1px 0 white"

    }
  } else {
    document.getElementById("dropdownItems2").style.display = "none";
    document.getElementById("forMembers").style.boxShadow = "none"
if(darkMode == false){
  document.getElementById("overview").style.color = "#073B4C"
    document.getElementById("forMembers").style.color = "#073B4C"
    document.getElementById("contact").style.color = "#073B4C"
    
}
  }
}

function openOverlay() {
  document.getElementById("galleryOverlay").style.display = "block";
}

function closeOverlay() {
  document.getElementById("galleryOverlay").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";


}

function home() {
  location.href = "index.html";
}

function hover1() {
  document.getElementById("img1").src = "images/aboutUs1Hover.jpg"
  document.getElementById("img1").display.transform = "scale(2)";
}

function hover1Stop() {
  document.getElementById("img1").src = "images/aboutUs1.jpg"

}

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




  function contactSubmit(){ 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name = null || name == ""){
      alert("Please enter your name");
    } else if (email = null || email ==""){
      alert("Please enter your email");
    } else if (message = null || message ==""){
      alert("Please enter your message");
    } else {
      var name = document.getElementById("name").value;

      document.getElementById("contactForm").style.display = "none";
      document.getElementById("contactReceived").style.display = "block";
      document.getElementById("contactReceived").innerHTML = "Thank you " + name + ", we will get back to you as soon as possible.";
    }
    
      
    }
    
  

    function signUpSubmit(){ 
      var signUpName = document.getElementById("signUpName").value;
      var signUpTutor = document.getElementById("signUpTutor").value;
  
      if(signUpName = null || signUpName == ""){
        alert("Please enter your name");
      } else if (signUpTutor = null || signUpTutor ==""){
        alert("Please enter your tutor class");
      } else {
        var signUpName = document.getElementById("signUpName").value;
  
        document.getElementById("signUpForm").style.display = "none";
        document.getElementById("signUpReceived").style.display = "block";
        document.getElementById("signUpReceived").innerHTML = "Thank you for your interest in joining the chess club, " + signUpName + ". All you have to do now is turn up to chess club next Tuesday in 6P.";
      }
      
        
      }
      
    
function logoChange1(){
  if(darkMode == true){
    document.getElementById("logo").src = "images/logoDark.png";
  } else {    document.getElementById("logo").src = "images/logo1.png";

  }

}

function logoChange2(){
  if(darkMode == true){
    document.getElementById("logo").src = "images/logoDark.png";
  } else {    document.getElementById("logo").src = "images/logo.png";

  }
  
}

