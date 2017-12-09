
<?php
$a = 'test1 test2 test3 test4';
$b = 'test7 test5 test1 test4';


function getCommonWords (string $a, string $b):array {
    $items1 = splitString($a);
    $items2 = splitString($b);
//    var_dump($items1);
    $result = [];
//    foreach ($items1 as $item1){
//        foreach ($items2 as $item2){
//            if ($item1 === $item2){
//                $result[] = $item1;
//            }
//        }
//    }
    foreach ($items1 as $item1){
        if (in_array($item1,$items2,true)){
            $result[] = $item1;
        }

    }

    return $result;
}

function splitString (string $a):array {
    return explode(' ', $a);
}

var_dump(getCommonWords($a, $b));