<?php
function give_me_array(string $text) :array {
    $arr = explode(' ', $text);
    $new_arr = [];
    foreach ($arr as $item){
        $new_arr[$item] = 0;
    }
    foreach ($arr as $item){
        $new_arr[$item]++;
    }
    return $new_arr;
}

function count_of_words(string $text) {
    $arr = give_me_array($text);
    asort($arr);
    foreach (array_reverse($arr) as $key => $item){
        echo $key . ' - ' . $item . '<br>';
    }
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
    <input type="text" name="text" placeholder="text here" value="яблоко черешня вишня вишня черешня груша яблоко черешня вишня яблоко вишня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня вишня черешня груша яблоко черешня черешня вишня яблоко вишня вишня черешня черешня груша яблоко черешня вишня">
    <button type="submit">send text</button>
    <p><?php
        if ($_POST && $_POST['text']){
            count_of_words($_POST['text']);
        }
        ?>
    </p>
</form>
</body>
</html>
