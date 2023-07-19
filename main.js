function signUpPage (){
    location.href = "signup.html";
}
var dropdown1Clicks = 1;
var dropdown2Clicks = 1;

function dropdown1() {
  dropdown2Clicks = 1;
dropdown1Clicks++;
if (dropdown1Clicks % 2 === 0) {
document.getElementById("dropdownItems1").style.display = "grid";
document.getElementById("overview").style.boxShadow = "-2px -2px 1px 0 black";
document.getElementById("forMembers").style.boxShadow = "none";
document.getElementById("forMembers").style.color = "#999"
document.getElementById("contact").style.color = "#999"
document.getElementById("dropdownItems2").style.display = "none";
document.getElementById("overview").style.color = "#073B4C"

} else {
  document.getElementById("dropdownItems1").style.display = "none";
  document.getElementById("forMembers").style.color = "#073B4C"
document.getElementById("overview").style.color = "#073B4C"
document.getElementById("contact").style.color = "#073B4C"
document.getElementById("overview").style.boxShadow = "none"
}
}

function dropdown2(){
  dropdown1Clicks = 1;
  dropdown2Clicks++;
  if (dropdown2Clicks % 2 === 0) {

    document.getElementById("dropdownItems2").style.display = "grid";
    document.getElementById("dropdownItems1").style.display = "none";
    document.getElementById("forMembers").style.boxShadow = "-2px -2px 1px 0 black"
    document.getElementById("overview").style.boxShadow = "none";
document.getElementById("overview").style.color = "#999"
document.getElementById("contact").style.color = "#999"
document.getElementById("forMembers").style.color = "#073B4C"
  } else {
    document.getElementById("dropdownItems2").style.display = "none";
    document.getElementById("overview").style.color = "#073B4C"
    document.getElementById("forMembers").style.color = "#073B4C"
    document.getElementById("contact").style.color = "#073B4C"
    document.getElementById("forMembers").style.boxShadow = "none"

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
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
  }

  function home() {
    location.href = "index.html";
  }