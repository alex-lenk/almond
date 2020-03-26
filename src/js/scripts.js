'use strict';

/* BEGIN mobile device definition
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
 END mobile device definition  */


$(document).ready(function () {
    $('.phone').inputmask({"mask": "+7 (999) 999-99-99"});


    $('.reviews-list__more').click(function () {
        $('.reviews-list').addClass('reviews-list__show')
    });

    $('.reviews-what__more').click(function () {
        $('.reviews-what').addClass('reviews-what__show')
    });

    if ($(window).width() > 1099) {
        $('.portfolio-wrapper').each(function () {
            var portfolioHead = $(this).find('.portfolio-head').html();
            $(this).find('.portfolio-head').hide();
            $(this).find('.portfolio-content').prepend(portfolioHead);
        });
    }


    /* BEGIN Actions on opening menus on mobile devices  */
    var menuToggle = '.menu-toggle';
    $(menuToggle).click(function () {
        $('html').toggleClass('menu-opened');
    });
    /* END Actions on opening menus on mobile devices  */


    var windowWidth = $(window).width(),
        social = $('.social');

    if (windowWidth > 576) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
                social.fadeIn();
            } else {
                social.fadeOut();
            }
        });


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
    }


    if ($(window).width() > 1099) {
        var headerStick = '.header-stick';
        var headerStickCurrent = 'header-stick__current';
        $('.header').clone().appendTo(headerStick);
        $('.nav-menu').clone().appendTo(headerStick);

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('html').addClass(headerStickCurrent)
            } else {
                $('html').removeClass(headerStickCurrent)
            }
        });
    }


    $('body').on('click', '[href*="#"]', function (e) {
        var fixed_offset = 0;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
        e.preventDefault();
    });


    $(".masters-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: ".masters-list",
        infinite: false
    });
    $(".masters-list").slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: ".masters-slider",
        arrows: false,
        focusOnSelect: true,
        infinite: false
    });


    setTimeout(function () {
        $("#allinone_carousel_1").allinone_carousel({
            skin: "sweet",
            width: 1120,
            height: 510,
            width100Proc: false,
            height100Proc: false,
            autoPlay: 0,
            numberOfVisibleItems: 7,
            elementsHorizontalSpacing: 110,
            elementsVerticalSpacing: 20,
            verticalAdjustment: 50,
            animationTime: 0.1,
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
        $("#allinone_carousel_what").allinone_carousel({
            skin: "sweet",
            width: 1120,
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
