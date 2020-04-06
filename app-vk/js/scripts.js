'use strict';

/* BEGIN: LazyLoad img */
registerListener('load', setLazy);
registerListener('load', lazyLoad);
registerListener('scroll', lazyLoad);

var lazy = [];

function setLazy() {
    lazy = document.getElementsByClassName('img__data-path');
    //console.log('Found ' + lazy.length + ' lazy images');
}

function lazyLoad() {
    for (var i = 0; i < lazy.length; i++) {
        if (isInViewport(lazy[i])) {
            if (lazy[i].getAttribute('data-path')) {
                lazy[i].src = lazy[i].getAttribute('data-path');
                lazy[i].removeAttribute('data-path');
            }
        }
    }

    cleanLazy();
}

function cleanLazy() {
    lazy = Array.prototype.filter.call(lazy, function (l) {
        return l.getAttribute('data-path');
    });
}

function isInViewport(el) {
    var rect = el.getBoundingClientRect();

    return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function registerListener(event, func) {
    if (window.addEventListener) {
        window.addEventListener(event, func)
    } else {
        window.attachEvent('on' + event, func)
    }
}

/* END: LazyLoad img */


setTimeout(function () {
    $('html').addClass('init-second');
}, 1500);

/* инитим vkBridge */
$(document).ready(function () {
    vkBridge.send('VKWebAppInit');
});
/* инитим vkBridge */

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


    $('.phone').inputmask({"mask": "+7 (999) 999-99-99"});


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
});
