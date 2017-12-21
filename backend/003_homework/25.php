
<?php
function swap (array &$array,$swap_a,$swap_b){
    $cont = $array[$swap_a];
    $array[$swap_a] = $array[$swap_b];
    $array[$swap_b] = $cont;
}

$mass = null;
$element_count = 10;
$range_min = 1;
$range_max = 90;

for ($i=0;$i<$element_count;$i++){
    $mass[$i]=rand($range_min,$range_max);
    echo "$mass[$i]\t";
}
$min_v = $mass[0]; $max_v = $mass[0];
$min = 0; $max = 0;
for ($i=1;$i<$element_count;$i++){
    if($mass[$i]>$max_v){
        $max = $i;
        $max_v = $mass[$i];
    }
    if ($mass[$i]<$min_v){
        $min = $i;
        $min_v = $mass[$i];
    }
}

swap($mass,$min,$max);
echo "\n";
for ($i=0;$i<$element_count;$i++){
    echo "$mass[$i]\t";
}