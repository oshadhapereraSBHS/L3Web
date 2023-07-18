function signUpPage (){
    location.href = "signup.html";
}

function dropdown1 (){
    if(document.getElementById("dropdownItems2").style.display != "grid"
    ){
        document.getElementById("dropdownItems1").style.display = "grid";
        document.getElementById("overview").style.textDecoration = "underline"
    }
    
}
function removeDropdown1 (){
    document.getElementById("dropdownItems1").style.display = "none";
    document.getElementById("overview").style.textDecoration = "none"

}
function dropdown2 (){
    if(document.getElementById("dropdownItems1").style.display != "grid"){
        document.getElementById("dropdownItems2").style.display = "grid"
        document.getElementById("forMembers").style.textDecoration = "underline"
    }

}
function removeDropdown2 (){
    document.getElementById("dropdownItems2").style.display = "none";
    document.getElementById("forMembers").style.textDecoration = "none"

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
    slides[slideIndex-1].style.display = "block";
    
  }

  function home() {
    location.href = "index.html";
  }