/* BEGIN: LazyLoad img */
document.addEventListener("DOMContentLoaded", function () {
    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".img__data-path");
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("img__data-path");
                    imageObserver.unobserve(image);
                }
            });
        });

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    } else {
        var lazyloadThrottleTimeout;
        lazyloadImages = document.querySelectorAll(".img__data-path");

        function lazyload() {
            if (lazyloadThrottleTimeout) {
                clearTimeout(lazyloadThrottleTimeout);
            }

            lazyloadThrottleTimeout = setTimeout(function () {
                var scrollTop = window.pageYOffset;
                lazyloadImages.forEach(function (img) {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        img.src = img.dataset.src;
                        img.classList.remove('img__data-path');
                    }
                });
                if (lazyloadImages.length == 0) {
                    document.removeEventListener("scroll", lazyload);
                    window.removeEventListener("resize", lazyload);
                    window.removeEventListener("orientationChange", lazyload);
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);
        window.addEventListener("resize", lazyload);
        window.addEventListener("orientationChange", lazyload);
    }
});
/* END: LazyLoad img */

'use strict';

setTimeout(function () {
    $('html').addClass('init-second');
}, 1500);


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

    if (windowWidth < 575) {
    }
    $('.callback-modal').submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            dataType: "html",
            data: $(this).serialize()
        }).done(function () {
            $('.js-step-thanks').show();
            $('.callback-modal').trigger("reset");
            setTimeout(function () {
                $('.js-step-thanks').hide();
                $.fancybox.close();
            }, 3000);
        });
        return false;
    });

    $('.callback').submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            dataType: "html",
            data: $(this).serialize()
        }).done(function () {
            $.fancybox.open({
                src: '#modal-04',
                type: 'inline',
                opts: {
                    afterShow: function (instance, current) {
                        console.info('done!');
                    }
                }
            });
            $('.callback').trigger("reset");
            setTimeout(function () {
                $.fancybox.close();
                console.info('close!');
            }, 3000);
        });
        return false;
    });
});
