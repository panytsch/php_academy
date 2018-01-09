<?php
    function run(){
        $input_text = $_POST["area"];
        $text_array = splitString($input_text);
        $array = arrayCreate($text_array);
        krsort($array);
        var_dump(array_slice($array,0,3));
    }

    function splitString (string $a):array {
        return explode(' ', $a);
    }

    function arrayCreate(array $arr):array {
        $buff =[];
        foreach ($arr as $item){
            $buff[mb_strlen($item)] = $item;
        }
        return $buff;
    }
?>

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
        <textarea style="color: black; resize: none" name="area" cols="60" rows="15" placeholder="Write your text here. Please, write only letters and spaces"></textarea>
        <button type="submit">send</button>
    </form>
    <?php run();?>
</body>
</html>
