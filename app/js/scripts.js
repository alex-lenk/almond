'use strict';

$(document).ready(function () {
    var windowWidth = $(window).width(),
        scrollToTop = $('.scroll-to-top'),
        headerCallPanel = $('.header-call__panel'),
        social = $('.social');

    /* BEGIN Actions on opening menus on mobile devices  */
    var menuToggle = '.menu-toggle';
    $(menuToggle).click(function () {
        $('html').toggleClass('menu-opened');
    });
    $('.menu-mob__link').click(function () {
        $('html').toggleClass('menu-opened');
    });
    /* END Actions on opening menus on mobile devices  */


    /* BEGIN Script scroll to top  */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            scrollToTop.fadeIn();
            headerCallPanel.fadeIn();
        } else {
            scrollToTop.fadeOut();
            headerCallPanel.fadeOut();
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


    if (windowWidth < 575) {
        $('#video-reviews').click(function () {
            $('.video-reviews').css('height', 'auto');
            $(this).fadeOut();
        });
        $('#reviews-what').click(function () {
            $('.reviews-what').css('height', 'auto');
            $(this).fadeOut();
        });
    } else {
        $('.nav-bar-stick').css('width', windowWidth);
        $('.social, .scroll-to-top').css('left', windowWidth);

        $(window).scroll(function () {
            if ($(this).scrollTop() > 350) {
                social.fadeIn();
            } else {
                social.fadeOut();
            }
        });
    }

    $('[data-fancybox=""]').fancybox({
        autoFocus: false
    });


    $("#form-callback").submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            data: $(this).serialize()
        }).done(function () {
            $('.js-step-2').show();
            $("#form-callback").trigger("reset");
            setTimeout(function () {
                $('.js-step-2').hide();
            }, 5000);
        });
        return false;
    });
});
