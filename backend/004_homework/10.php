<?php
function count_text(string $text) :string {
    $arr = explode(' ', $text);
    $new_arr = [];
    foreach ($arr as $item ){
        if (!in_array($item, $new_arr)){
            $new_arr[] = $item;
        }
    }
    $text .= "<br><br> this text has <b>" . count($new_arr) . "</b> unique words";
    return $text;
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
    <input type="text" name="text" placeholder="text here" content="some text">
    <button type="submit">send text</button>
    <p><?php
        if ($_POST && $_POST['text']){
            echo count_text($_POST['text']);
        }
        ?>
    </p>
</form>
</body>
</html>
