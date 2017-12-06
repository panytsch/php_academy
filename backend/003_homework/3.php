<?php
$mass =[1, 20, 15, 17, 24, 35];
$result = null;

foreach ($mass as $val){
    $result+=$val**2;
}

echo $result;