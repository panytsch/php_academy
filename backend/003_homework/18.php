<?php
$mass =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

echo "Today we have - " . date("l") . "\n";

foreach ($mass as $day){
    if ($day ==='Saturday' || $day === 'Sunday'){
        echo "<b>$day</b>\n";
    }
    else {
        echo "$day\n";
    }
}