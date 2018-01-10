<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Hello!</title>
</head>
<body>
    <p><a href="index.php" style="margin-right: 50px;">Home</a><a href="hello.php">Hello</a></p>
    <h2>Hello, mr./mrs.
        <?php
            session_start();
            echo $_SESSION['name'];
        ?>
    </h2>
</body>
</html>