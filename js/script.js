var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  slides[slideIndex-1].style.display = "block";
  
}

setInterval(function() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
 
  slides[slideIndex-1].style.display = "block";  
},3000)

//------------------------------------------------------------------------------

function getCookie(){
  var cooki_arr=[]
  var sp_cooki =document.cookie.split(";");

  for(var i=0; i<sp_cooki.length; i++)
  {
    cooki_arr[sp_cooki[i].split("=")[0].trim()]=sp_cooki[i].split("=")[1].trim();
  }
  return cooki_arr;
}


window.onload = function() {
  console.log("asd")
  console.log(localStorage.getItem("registration"))
  if(localStorage.getItem("registration"))
  {
    var arr=getCookie();
    document.getElementById("login").innerHTML ="<span style=color:red; font-size:20px; >"+arr["username"]+"</span>";
    document.getElementById("login").innerHTML += " <a class=Btn onclick=logout()> Logout </a>";

  }
}


function logout(){
  document.cookie="";
  document.getElementById("login").innerHTML ="<a class=Btn >Log in</a>"
  localStorage.setItem("registration",0);

}