'use strict';

/* BEGIN: LazyLoad img */
setTimeout(function () {
    [].forEach.call(document.querySelectorAll('.img__data-path'), function (img) {
        img.setAttribute('src', img.getAttribute('data-path'));
        img.onload = function () {
            img.removeAttribute('data-path');
        };
    });
    /* END: LazyLoad img */
}, 500);

setTimeout(function () {
    $('html').addClass('init-second');
}, 1500);

/* инитим vkBridge */
$(document).ready(function () {
    vkBridge.send('VKWebAppInit');
});
/* инитим vkBridge */

$(document).ready(function () {
    var windowWidth = $(window).width(),
        scrollToTop = $('.scroll-to-top'),
        headerCallPanel = $('.header-call__panel'),
        social = $('.social');

    if (windowWidth < 575) {
        $('#video-reviews').click(function () {
            $('.video-reviews').css('height', 'auto');
            $(this).fadeOut();
        });
        $('#reviews-what').click(function () {
            $('.reviews-what').css('height', 'auto');
            $(this).fadeOut();
        });

        var reviewsWhat = $('.reviews-what'),
            heightReviewsWhatItem = $('.reviews-what__item').height(),
            heightReviewsWhat = reviewsWhat.outerHeight();

        reviewsWhat.height(heightReviewsWhat);
        console.log(heightReviewsWhat);
        console.log(heightReviewsWhatItem);
    } else {
        //$('.nav-bar-stick').css('width', windowWidth);
        $('.social, .scroll-to-top').css('left', windowWidth);

        $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
                social.fadeIn();
            } else {
                social.fadeOut();
            }
        });


        /* BEGIN Script scroll to top  */
        $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
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

    /* BEGIN Actions on opening menus on mobile devices  */
    var menuToggle = '.menu-toggle';
    $(menuToggle).click(function () {
        $('html').toggleClass('menu-opened');
    });
    $('.menu-mob__link').click(function () {
        $('html').toggleClass('menu-opened');
    });
    /* END Actions on opening menus on mobile devices  */

    document.ondragstart = noselect;
    // запрет на перетаскивание
    document.onselectstart = noselect;
    // запрет на выделение элементов страницы
    document.oncontextmenu = noselect;

    // запрет на выведение контекстного меню
    function noselect() {
        return false;
    }

    //запретить на сайте нажатие CTRL+SHIFT+I и F12
    document.onkeydown = function (e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    };

    $('.go-anchor').on('click', function (e) {
        e.preventDefault();
        var fixed_offset = 88;
        $('html, body').stop().animate({scrollTop: $(this.hash).offset().top - fixed_offset}, 900);
    });


    $('.phone').inputmask({"mask": "+7 (999) 999-99-99"});

    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            headerCallPanel.fadeIn();
        } else {
            headerCallPanel.fadeOut();
        }
    });

    $('[data-fancybox=""]').fancybox({
        autoFocus: false
    });


    $('.form-callback').submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            dataType: "html",
            data: $(this).serialize()
        }).done(function () {
            $('.js-step-2').show();
            $('.form-callback').trigger("reset");
            setTimeout(function () {
                $('.js-step-2').hide();
            }, 5000);
        });
        return false;
    });

    $(".service-maintenance__poster").click(function () {

        var $video = $('#service-maintenance-video'),
            src = $video.attr('src');

        $video.attr('src', src + '&autoplay=1');

        $('.service-maintenance').addClass('service-maintenance-open');
    });
});
