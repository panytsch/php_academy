<?php
function give_directory(string $word, string $dir = __DIR__){
    $hren = array_diff( scandir( $dir), array('..', '.'));
    foreach ($hren as $item){
        if (strpos($item, $word)!== false){
            echo $item . "<br/>";
        }
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
<?php
give_directory('php','/home/panytsch/Стільниця/academy/backend/004_homework/3');
?>
</body>
</html>
