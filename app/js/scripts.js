'use strict';

$(document).ready(function () {
    /* BEGIN Actions on opening menus on mobile devices  */
    var menuToggle = '.menu-toggle';
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
        var fixed_offset = 0;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
        e.preventDefault();
    });



    $('input[type=tel]').inputmask({"mask": "+7 (999) 999-99-99"});


    setTimeout(function () {
        $('#allinone_carousel_what').allinone_carousel({
            skin: "sweet",
            width: 1127,
            height: 650,
            width100Proc: false,
            height100Proc: false,
            autoPlay: 0,
            numberOfVisibleItems: 7,
            elementsHorizontalSpacing: 110,
            elementsVerticalSpacing: 20,
            verticalAdjustment: 50,
            animationTime: 0.2,
            easing: "easeOutQuad",
            resizeImages: true,
            target: "_blank",
            showElementTitle: false,
            showAllControllers: true,
            showNavArrows: true,
            showOnInitNavArrows: true,
            autoHideNavArrows: false,
            showBottomNav: true,
            showOnInitBottomNav: true,
            autoHideBottomNav: false,
            showPreviewThumbs: false,
            nextPrevMarginTop: 23,
            playMovieMarginTop: 0,
            bottomNavMarginBottom: 0,
            enableTouchScreen: false,
            absUrl: "",
            showCircleTimer: false,
            showCircleTimerIE8IE7: false,
            responsive: true,
            responsiveRelativeToBrowser: false,
            circleLeftPositionCorrection: 20,
            circleTopPositionCorrection: 20,
            activeItemClass: ""
        });
    }, 1000);
});
