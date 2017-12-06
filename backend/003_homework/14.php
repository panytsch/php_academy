<?php
$array = [4, 2, 5, 19, 13, 0, 10];

//$e = 2;
//$e = 3;
$e = 4;
$bool = false;

foreach ($array as $val){
    if ($val === $e){
        $bool = true;
    }
}

if ($bool == true){
    echo "Есть!";
}
else{
    echo "Нет!";
}