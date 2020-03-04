//js for windows games//
$(document).ready(function(){
    $("#press").click(function(){
        $("#press").slideToggle();
        $(".hide1").slideToggle();
    });
    $(".hide1").click(function(){
        $(".hide1").slideToggle();
        $("#press").slideToggle();
    });

    $("#press1").click(function(){
        $("#press1").slideToggle();
        $(".hide2").slideToggle();
    });
    $(".hide2").click(function(){
        $(".hide2").slideToggle();
        $("#press1").slideToggle();
    });

    $("#press2").click(function(){
        $("#press2").slideToggle();
        $(".hide3").slideToggle();
    });
    $(".hide3").click(function(){
        $(".hide3").slideToggle();
        $("#press2").slideToggle();
    });

    $("#press3").click(function(){
        $("#press3").slideToggle();
        $(".hide4").slideToggle();
    });
    $(".hide4").click(function(){
        $(".hide4").slideToggle();
        $("#press3").slideToggle();
    });

    $("#press4").click(function(){
        $("#press4").slideToggle();
        $(".hide5").slideToggle();
    });
    $(".hide5").click(function(){
        $(".hide5").slideToggle();
        $("#press4").slideToggle();
    });

    $("#press5").click(function(){
        $("#press5").slideToggle();
        $(".hide6").slideToggle();
    });
    $(".hide6").click(function(){
        $(".hide6").slideToggle();
        $("#press5").slideToggle();
    });
});

var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds 
}

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