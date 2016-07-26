/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    'use strict';
    $('.header-bar-tex').click(function () {
        var s = $('.header-drop').css('display');
        if (s === 'none') {
            $('.header-drop').slideDown();
        } else {
            $('.header-drop').slideUp();
        }
    });
    
    $('span').click(function () {
        var a = $(this).text();
        if (a === 'About') {
            $(".header-drop").slideUp();
            $('html, body').animate({
                scrollIntoView: $(".about").offset().top
            }, 700);
        }
        if (a === 'PORTFOLIO') {
            $(".header-drop").slideUp();
            $('html, body').animate({
                scrollTop: $(".portfolio").offset().top
            }, 700);
        }
        if (a === 'CONTACT') {
            $(".header-drop").slideUp();
            $('html, body').animate({
                scrollTop: $(".contact").offset().top
            }, 700);
        }
    });
  
});
