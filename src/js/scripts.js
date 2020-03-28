'use strict';


/* BEGIN: LazyLoad img */
setTimeout(function () {
    [].forEach.call(document.querySelectorAll('.img__data-path'), function (img) {
        img.setAttribute('src', img.getAttribute('data-path'));
        img.onload = function () {
            img.removeAttribute('data-path');
        };
    });
}, 500);
/* END: LazyLoad img */


/* Function to animate height: auto */
function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css("height", "auto").height(); // Get Auto Height

    element.height(curHeight); // Reset to Default Height
    element.stop().animate({height: autoHeight}, time); // Animate to Auto Height
}


$(document).ready(function () {
    $('.phone').inputmask({"mask": "+7 (999) 999-99-99"});


    var animateTime = 300;

    $('.portfolio-content__description-toggle').click(function () {
        var thisPrev = $(this).prev();

        if (thisPrev.height() === 100) {
            autoHeightAnimate(thisPrev, animateTime);
            $(this).addClass('portfolio-content__description-open');
        } else {
            thisPrev.stop().animate({height: "100"}, animateTime);
            $(this).removeClass('portfolio-content__description-open');
        }
    });


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
});
