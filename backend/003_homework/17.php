<?php
$month = date("F");
$mass =['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

echo 'Поточний місяць - ' . $month . "\n";

foreach ($mass as $mont){
    if ($mont === $month){
        echo "<b> $mont </b>\n";
    }
    else {
        echo "$mont\n";
    }
}