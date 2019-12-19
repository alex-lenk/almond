"use strict";

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
    /*    $('.menu-toggle').click(function () {
            $('body').toggleClass('menu-is-active');
        });*/
    /* END Actions on opening menus on mobile devices  */


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


    $("body").on('click', '[href*="#"]', function (e) {
        var fixed_offset = 0;
        $('html,body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
        e.preventDefault();
    });


    $('.portfolio-content__text').customScroll();
});

var navigation = {
    // Variables
    $nav: document.querySelector('.nav-menu'),
    $navTrigger: document.querySelector('.menu-toggle'),
    $navContent: document.querySelector('.menu'),
    $navList: document.querySelector('.menu'),
    transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
    init: function init() {
        var self = this; // Handle the transitions

        self.$navTrigger.addEventListener('click', function () {
            if (!self.$navTrigger.classList.contains('is-active')) {
                // .nav--trigger active
                self.$navTrigger.classList.add('is-active'); // .nav active

                if (!self.$nav.classList.contains('is-active')) {
                    self.$nav.classList.add('is-active');
                    self.$nav.addEventListener('transitionend', function (e) {
                        if (e.propertyName === 'width' && self.$navTrigger.classList.contains('is-active')) {
                            // .nav__content active
                            self.$navContent.classList.add('is-active');
                        }
                    });
                } else {
                    self.$navContent.classList.add('is-active');
                } // no-csstransitions fallback


                if (document.documentElement.classList.contains('no-csstransitions')) {
                    self.$navContent.classList.add('is-active');
                }
            } else {
                // .nav--trigger inactive
                self.$navTrigger.classList.remove('is-active'); // .nav__content inactive

                if (self.$navContent.classList.contains('is-active')) {
                    self.$navContent.classList.remove('is-active');
                    self.$navContent.addEventListener('transitionend', function (e) {
                        if (e.propertyName === 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
                            // .nav inactive
                            self.$nav.classList.remove('is-active');
                        }
                    });
                } else {
                    self.$nav.classList.remove('is-active');
                } // no-csstransitions fallback


                if (document.documentElement.classList.contains('no-csstransitions')) {
                    self.$nav.classList.remove('is-active');
                }
            }
        });
    }
};
navigation.init();
