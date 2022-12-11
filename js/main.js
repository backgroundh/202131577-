$(function(){
    $("#login").hover(
        function(){
        $("#login_click").stop().animate({height:300}).css({"display":"block"})
    },function(){
        $("#login_click").stop().animate({height:80}).css({"display":"none"})
    });

    $(".nav").hover(
        function(){
        $("#menuMid").stop().slideDown({"display":"block"})
    },function(){
        $("#menuMid").stop().slideUp({"display":"none"})
    });



})//