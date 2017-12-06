<?php
$arr = ['green'=>'зеленый', 'red'=>'красный','blue'=>'голубой'];
$i = 0;
foreach ($arr as $k => $v){
    $en[]=$k;
    $ru[]=$v;
    echo "$en[$i] \t $ru[$i] \n";
    $i++;
}