<?php

function write(string $n, string $m, string $dir) {
    $name = $n;
    $message = $m;
    $message = str_replace(PHP_EOL, ' ', $message);
    $handle = fopen($dir, 'a');
    fwrite($handle, $name . PHP_EOL . $message . PHP_EOL);
    fclose($handle);
}

function read(string $dir){
    $handle = fopen($dir, 'r');
    $array = [];
    $i = 1;
    while (!feof($handle)){
        $array[] = fgets($handle);
    }
    foreach ($array as $item){
        if (!$item) continue;
        if (($i % 2)){
            echo "<p class='name'><b>Name:</b> <u>$item</u></p>";
        }
        else{
            echo "<p class='message'>Message: $item</p>";
        }
        ++$i;
    }
    fclose($handle);
}

function verify (string $text){
    $array = ['kaka', 'shit', 'govno', 'fuck'];
    foreach ($array as $item){
        if (strpos($text, $item)!== false){
            echo "<script>alert('Некорректный комментарий');</script>";
            return false;
        }
    }
    return true;
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
    <style>
        .message {
            font-style: italic;
            margin-left: 50px;
        }
    </style>
</head>
<body>
<form action="" method="POST" enctype="multipart/form-data">
    <?php
    $dir = __DIR__ . '/book.txt';
    if ($_POST && $_POST['name'] && $_POST['message']) {
        $name = $_POST['name'];
        $msg = $_POST['message'];
        if(verify($msg) && verify($name)){
            $name = strip_tags($name, '<b>');
            $msg = strip_tags($msg, '<b>');
            write($name, $msg, $dir);
            read($dir);
        }
        else read($dir);
    }
    ?>
    <input type="text" name="name" placeholder="Your name"><br><br>
    <textarea type="text" name="message" style="height: 70px;resize: none;" placeholder="Your message"></textarea><br><br>
    <button type="submit">Send</button>
</form>
</body>
</html>
