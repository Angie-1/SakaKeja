// menu toggle
var navbar = document.getElementById("menu");
var hamburger = document.getElementById("ham");

function show() {
  navbar.classList.toggle("Show");
}

// popUp
function pop() {
  var pop = document.getElementById("popUp");
  pop.classList.add("open-popUp");
}

function popOut() {
  var out = document.getElementById("popUp");
  out.classList.remove("open-popUp");
}
