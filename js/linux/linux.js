//js for linux...//
$(document).ready(function() {
    $(".click").click(function() {
        $(".click").hide();
        $(".ficha1").fadeIn();
    });
    $(".ficha1").click(function() {
        $(".ficha1").hide();
        $(".click").fadeIn();
    });


    $(".click1").click(function() {
        $(".click1").hide();
        $(".ficha2").fadeIn();
    });
    $(".ficha2").click(function() {
        $(".ficha2").hide();
        $(".click1").fadeIn();
    });


    $(".click2").click(function() {
        $(".click2").hide();
        $(".ficha3").fadeIn();
    });
    $(".ficha3").click(function() {
        $(".ficha3").hide();
        $(".click2").fadeIn();
    });


    $(".click3").click(function() {
        $(".click3").hide();
        $(".ficha4").fadeIn();
    });
    $(".ficha4").click(function() {
        $(".ficha4").hide();
        $(".click3").fadeIn();
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
    setTimeout(showSlides, 5000);
}