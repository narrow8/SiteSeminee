window.onscroll = function() {myFunction()};

var navbar = document.getElementById("meniu");
var sticky = navbar.offsetTop;
var contact = false;

function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function showContact(){
  if (location.pathname.includes("main.html"))
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  else
  {
    sessionStorage.setItem('contact', 1);
    if (window.location.pathname.includes("focare") || window.location.pathname.includes("grile") || window.location.pathname.includes("cosuri") || window.location.pathname.includes("izolatii") || window.location.pathname.includes("accesorii"))
      window.location = "../../main.html";
    else
      window.location = "main.html";
  }
}

document.body.onload = function() {
  if (sessionStorage.getItem('contact') == 1)
  {
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
    sessionStorage.setItem('contact', 0);
  }
};