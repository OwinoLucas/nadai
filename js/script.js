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