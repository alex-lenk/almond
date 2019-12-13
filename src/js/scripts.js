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
    /* BEGIN Actions on opening menus on mobile devices  */
    $('.menu-toggle').click(function () {
        $('body').toggleClass('open-menu');
        $('.menu').slideToggle();
    });

    $('.menu-parent__data').click(function () {
        $(this).prev().slideToggle();
        $(this).toggleClass('menu-parent__data-open');
    });
    /* END Actions on opening menus on mobile devices  */


    /* BEGIN Rating star on comment  */
    $('.js__rating-star__item').click(function () {
        $('.js__rating-star__item.active').removeClass('active');
        $(this).toggleClass('active');
    });
    /* END Rating star on comment */




    /* BEGIN Transfer "widget-about" on mobile */
    //if ((isMobile.any())) $(".widget-about").appendTo(".single-block__location");
    /* END Transfer "widget-about" on mobile */


    /* BEGIN Script scroll to top  */
    var scrollToTop = $('.scrollToTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            scrollToTop.fadeIn();
        } else {
            scrollToTop.fadeOut();
        }
    });

    // scroll body to 0px on click
    scrollToTop.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    /* END Script scroll to top  */
});
