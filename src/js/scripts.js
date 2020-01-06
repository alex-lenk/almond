'use strict';

/* BEGIN mobile device definition  */
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
/* END mobile device definition  */


$(document).ready(function () {
    var menuToggle = '.menu-toggle';
    $('.nav-menu').stickUp();
    $('.logo').clone().prependTo('.nav-menu__inner').removeClass('header-logo');
    $(menuToggle).clone().appendTo('.nav-menu__inner');


    if ($(window).width() > 1099) {
        $('.portfolio-head').prependTo('.portfolio-content');
    }


    /* BEGIN Actions on opening menus on mobile devices  */

    $(menuToggle).click(function () {
        $('html').toggleClass('menu-opened');
    });
    /* END Actions on opening menus on mobile devices  */



    /* BEGIN Script scroll to top  */
    var scrollToTop = $('.scroll-to-top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    scrollToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    /* END Script scroll to top  */


    $('body').on('click', '[href*="#"]', function (e) {
        var fixed_offset = 50;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
        e.preventDefault();
    });


    $('.portfolio-content__text').customScroll({
        horizontal: false
    });
});
