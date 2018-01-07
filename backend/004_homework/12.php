<?php
function run(string $text) : string{
    $array = explode('.', $text);
    $text ='';
    for ($i=count($array)-1; $i>=0;$i--){
        if (!$array[$i]){continue;}
        $text .= $array[$i] . '.';
    }
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
    <input type="text" name="text" placeholder="text here"><br><br>
    <button type="submit">transform!</button>
    <p style="font: 400 25px/30px Aria, sans-serif;">
        <?php
        if ($_POST && $_POST['text']){
            echo run($_POST['text']);
        }
        else{
            echo 'write your text pls';
        }
        ?>
    </p>
</form>
</body>
</html>
