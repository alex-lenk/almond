<?php

if (isset($_POST['comment'])) {
    $comment = $_POST['comment'];
} else {
    $comment = '';
}

if (isset($_POST['formname'])) {
    $comment = $comment . ' | ' . $_POST['formname'];
}


if (isset($_POST['name'])) {
    $name = $_POST['name'];
} else {
    $name = 'Безымянный';
}

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
} else {
    $phone = '';
}


    $to = 'zaiavki.v@gmail.com';
    //alexlenk.ru@gmail.com

    $subject = 'Заявка c сайта airpods-stok.ru'; //Заголовок сообщения
    $message = '
                  <html>
                    <head>
                      <title>' . $subject . '</title>
                      </head>
                  <body>
                      <p><b>Имя:</b> ' . $name . '</p>
                      <p><b>Телефон:</b> ' . $phone . '</p>
                      <p><b>Комментарий:</b> ' . $comment . '</p>
                  </body>
                  </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Заказ наушников  <admin@airpods-stok.ru>\r\n"; //Наименование и почта отправителя

    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
