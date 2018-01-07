<?php
$mass =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

$day = date("l");

foreach ($mass as $d){
    if ($d === $day){
        echo "<i>$d</i>\n";
    }
    else{
        echo "$d\n";
    }
}