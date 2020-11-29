<?

if (isset($_POST['comment'])) {
    $comment = $_POST['comment'];
} else {
    $comment = '';
}

if (isset($_POST['formname'])) {
    $comment = $comment . $_POST['formname'];
}


if (isset($_POST['user_name'])) {
    $name = $_POST['user_name'];
} else {
    $name = '';
}

if (isset($_POST['user_phone'])) {
    $phone = $_POST['user_phone'];
} else {
    $phone = '';
}

if ($_POST['user_phone'] != "") {
    //Проверка отправилось ли наше поля name и не пустые ли они alexlenk.ru@gmail.com

    $to = 'sergey-fomin-1982@bk.ru';

    $subject = 'Заявка c сайта remont-sergeifomin.ru'; //Заголовок сообщения
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
                  </html>'; //Текст нашего сообщения можно использовать HTML теги
    $headers = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: заказ <info@remont-sergeifomin.ru>\r\n"; //Наименование и почта отправителя
    $res = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
