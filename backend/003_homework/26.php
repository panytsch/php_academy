<?php
$min_r = 1;
$max_r = 100;
$arr = null;
$count_arr = 10;
$count = 1;
for ($i=0; $i<$count_arr;$i++){
    $arr[$i]=rand($min_r,$max_r);
    if ($arr[$i] > 0 && $i%2 == 0){
        $count*=$arr[$i];
    }
    if ($i%2 != 0 && $arr[$i] > 0){
        echo "$arr[$i]\t";
    }
}

echo "\n$count";