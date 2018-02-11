<?php

if ($_POST && $_POST['login']){
    echo $_POST['login'];
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
        <label for="login">Login:</label>
        <input
            type="text"
            id="login"
            name="login"
            placeholder="your login"
        >
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="your password"
        >
        <button type="submit">Login</button>
    </form>
</body>
</html>
