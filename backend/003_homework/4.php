<?php
$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];

foreach ($arr as $k => $v){
    echo $k . "\n";
}

foreach ($arr as $v) {
    echo $v . "\n";
}