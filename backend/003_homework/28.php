<?php
$num1=1;
$end1=10;
$num2=1;
$end2=10;

for ($i=$num2;$i<=$end2;$i++){
    for ($j=$num1;$j<=$end1;$j++){
        echo $j . '*' . $i . '=' . $j*$i . "<br/>";
    }
    echo "\n <br/>";
}