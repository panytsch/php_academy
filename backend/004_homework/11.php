<?php
mb_internal_encoding("UTF-8");
function mb_ucfirst($text) {
    if (mb_substr($text, 0, 1) == " "){
        return ' ' . mb_strtoupper(mb_substr($text, 1, 1)) . mb_substr($text, 2);
    }
    else{
        return mb_strtoupper(mb_substr($text, 0, 1)) . mb_substr($text, 1);
    }
}
function transform_text (string $text) :string {
    $array = explode('.', $text);
    $text = "";
    foreach ($array as &$item){
        if ($item == false){
            continue;
        }
        $item = mb_ucfirst($item);
        $text .= $item . '.';
    }
    return $text;
}
?>
/**
 * Created by PhpStorm.
 * User: panytsch
 * Date: 07.01.18
 * Time: 15:10
 */

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
    <input type="text" name="text" placeholder="text here" content="some text">
    <button type="submit">send text</button>
    <p><?php
        if ($_POST && $_POST['text']){
            echo transform_text($_POST['text']);
//            echo mb_ucfirst($_POST['text']);
        }
        ?>
    </p>
</form>
</body>
</html>