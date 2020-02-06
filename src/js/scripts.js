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


    $('body').on('click', '[href*="#"]', function (e) {
        var fixed_offset = 0;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
        e.preventDefault();
    });


    $('.reviews-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.reviews-slick',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });


    $('.masters-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        asNavFor: '.masters-list'
    });
    $('.masters-list').slick({
        asNavFor: '.masters-slider',
        infinite: false,
        arrows: false,
        focusOnSelect: true,
        slidesToShow: 1,
        slidesPerRow: 7,
        slidesToScroll: 1,
        rows: 3
    });
});

jQuery(function () {
    setTimeout(function () {
        jQuery("#allinone_carousel_1").allinone_carousel({
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
            animationTime: 0.4,
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
        jQuery("#allinone_carousel_what").allinone_carousel({
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
            animationTime: 0.4,
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
