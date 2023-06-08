$(document).ready(function(){
    $(".sub").hide()

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown()
        $(".header_b").stop().animate({height : "400px"},500)
    })/* gnb mouseenter */
    
    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp()
        $(".header_b").stop().animate({height : "103px"},500)
    })/* gnb mouseleave */

    $(".move").slick({
        autoplay : true,
        autoplaySpeed : 2000,
        dots : true,
        arrows : true,
        
    })


})/* jQuery Close */