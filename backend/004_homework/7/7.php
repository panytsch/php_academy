<?php

function write(string $n, string $m, string $dir) {
    $name = $n;
    $message = $m;
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
//    var_dump(1%2 === 0); die();
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
    if($_POST && $_POST['name'] && $_POST['message']){
        write($_POST['name'], $_POST['message'], $dir);
        read($dir);
    }
    else read($dir);
    ?>
    <input type="text" name="name" placeholder="Your name"><br><br>
    <textarea type="text" name="message" style="height: 70px;resize: none;" placeholder="Your message"></textarea><br><br>
    <button type="submit">Send</button>
</form>
</body>
</html>
