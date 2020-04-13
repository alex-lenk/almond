'use strict';

setTimeout(function () {
    $('html').addClass('init-second');
}, 1500);

$(document).ready(function () {

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


    //$('.phone').inputmask({"mask": "+7 (999) 999-99-99"});
    $('.phone').mask("+7 (999) 999-99-99");


    $('.form-callback').submit(function () {
        $.ajax({
            type: "POST",
            url: "./php/sendmail.php",
            dataType: "html",
            data: $(this).serialize()
        }).done(function () {
            $('body').addClass('open-modal');
            $('.form-callback').trigger("reset");
            setTimeout(function () {
                $('body').removeClass('open-modal');
            }, 3000);
        });
        return false;
    });

    $('.modal-view-close').click(function () {
        $('body').toggleClass('open-modal');
    });


    var social = $('.social');
    social.css('left', $(window).width());

    $(window).scroll(function () {
        if ($(this).scrollTop() > 350) {
            social.fadeIn();
        } else {
            social.fadeOut();
        }
    });
});
