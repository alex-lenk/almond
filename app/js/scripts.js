//= lib/jquery.min.js
//= snippets/mask.js

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


$(document).ready(function () {
    /* инитим vkBridge */
    vkBridge.send('VKWebAppInit');
    /* инитим vkBridge */

    $('.call-form').submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            dataType: "html",
            data: $(this).serialize()
        }).done(function () {
            $('.modal-view__wrapper').fadeIn();
            $('.call-form').trigger("reset");
            setTimeout(function () {
                $('.modal-view__wrapper').fadeOut();
            }, 3000);
        });
        return false;
    });
});


/*

// Function to animate height: auto
function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css("height", "auto").height(); // Get Auto Height

    element.height(curHeight); // Reset to Default Height
    element.stop().animate({height: autoHeight}, time); // Animate to Auto Height
}


$(document).ready(function () {


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
        $('.reviews-list').addClass('reviews-list__show');
        $(this).hide();
    });

    $('.reviews-what__more').click(function () {
        $('.reviews-what').addClass('reviews-what__show');
        $(this).hide();
    });

    if ($(window).width() > 1099) {
        $('.portfolio-wrapper').each(function () {
            var portfolioHead = $(this).find('.portfolio-head').html();
            $(this).find('.portfolio-head').hide();
            $(this).find('.portfolio-content').prepend(portfolioHead);
        });



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
    } else {
        // BEGIN Actions on opening menus on mobile devices
        var menuToggle = '.menu-toggle';
        $(menuToggle).click(function () {
            $('html').toggleClass('menu-opened');
        });

        $('.menu-switch').click(function () {
            $('html').toggleClass('menu-opened');
        });
        //!* END Actions on opening menus on mobile devices

        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('html').addClass('menu-float')
            } else {
                $('html').removeClass('menu-float')
            }
        });
    }


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


        // BEGIN Script scroll to top
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
        // END Script scroll to top
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
        infinite: false,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }]
    });
});
*/
