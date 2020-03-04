//sticky navbar
window.onscroll = function () {
  stickNav()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//Login
//var modal = document.getElementById('login-form');

//window.onclick = function (event) {
//if (event.target == modal) {
// modal.style.display = "none";
//}
//}
$("form").submit(function (event) {
  event.preventDefault();
});