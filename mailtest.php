<?php
$sent = mail("hamiduguinea@gmail.com", "Mail Test", "Hallo, dieser Test kommt direkt von PHP mail()");

if($sent){
    echo "mail() works";
} else {
    echo "mail() failed";
}
?>
