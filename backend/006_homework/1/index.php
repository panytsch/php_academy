<?php

function send_name () : bool {
    if ($_POST && $_POST['name']){
        session_start();
        $_SESSION['name'] = $_POST['name'];
        return true;
    }
    else{
        return false;
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
<p><a href="index.php" style="margin-right: 50px;">Home</a><a href="hello.php">Hello</a></p>
<form action="" method="post">
    <input type="text" name="name"><br><br>
    <button type="submit">Send name</button>
    <?php
    $tr = send_name();
    if (!$tr){
        echo 'Pls, write your name in field';
    }
    ?>
</form>
</body>
</html>
