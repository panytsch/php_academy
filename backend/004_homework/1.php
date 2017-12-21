<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="" method="post">
    <input type="text" name="first" placeholder="write first text here"><br><br>
    <input type="text" name="second" placeholder="write second text here"><br><br>
    <button type="submit">check!</button>
</form>
<div style="margin: 50px 0 0 20px; font: 400 16px/20px Arial, sans-serif; color: green">
    your words: <br>
    <?php
    $a = $_POST["first"];
    $b = $_POST["second"];
    getCommonWords($a, $b);
    ?>
</div>
</body>
</html>


<?php


//var_dump($_POST);

function getCommonWords (string $a, string $b) {
    $items1 = splitString($a);
    $items2 = splitString($b);

    $result = [];

    foreach ($items1 as $item1){
        if (in_array($item1,$items2,true)){
            $result[] = $item1;
        }

    }

    foreach ($result as $item){
        echo $item . "<br/>";
    }
}

function splitString (string $a):array {
    return explode(' ', $a);
}

?>

