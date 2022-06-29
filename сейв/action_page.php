$fname = $_POST['fname'];
$lname = $_POST['lname'];
$fathername = $_POST['fathername'];
$age = $_POST['age'];
$num = $_POST['num'];

$fname = htmlspecialchars($fname);
$lname = htmlspecialchars($lname);
$fathername = htmlspecialchars($fathername);
$age = htmlspecialchars($age);
$num = htmlspecialchars($num);

$fname = urldecode($fname);
$lname = urldecode($lname);
$fathername = urldecode($fathername);
$age = urldecode($age);
$num = urldecode($num);

$fname = trim($fname);
$lname = trim($lname);
$fathername = trim($fathername);
$age = trim($age);
$num = trim($num);

if (mail("Garillazavr96@yandex.ru", "Заявка в лагерь с сайта", "Имя:".$fname.". Фамилия: ".$lname\r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}



