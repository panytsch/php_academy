<?php
$arr =[1, 2, 3, 4, 5, 6, 7, 8, 9];
$str = null;
echo "cycle foreach\n";
foreach ($arr as $val){
    $str.=$val;
}

echo $str . "\n\n";

$str = null;
echo "cycle for\n";
for($i=0;$i<9;$i++){
    $str.=$arr[$i];
}

echo $str . "\n\n";
$i=0;
$str = null;
echo "cycle while\n";
while ($i<9){
    $str.=$arr[$i];
    $i++;
}

echo $str;
