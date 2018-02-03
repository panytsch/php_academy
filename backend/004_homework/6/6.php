<?php
    function writing(array &$name, array &$path){
        foreach ($_FILES['picture'] as $val1 => $karton){
            if ($val1 == 'name'){
                foreach ($karton as $item){
                    $name[] = $item;
                }
            }
            else if ($val1 == 'tmp_name'){
                foreach ($karton as $item){
                    $path[] = $item;
                }
            }
        }
    }

    function move_from_temp (array $name, array &$path){
        if(!is_dir(__DIR__ . '/uploads')){
            mkdir(__DIR__ . '/uploads');
        }
        for ($i=0; $i<count($path); $i++) {
            $old_path = $path[$i];
            $path[$i] = __DIR__ . '/uploads/';
            move_uploaded_file($old_path,$path[$i] . $name[$i]);
        }
        $path = $path[0];
    }

    function display_img (string $dir){
        $count =1;
        $hren = array_diff( scandir( $dir), array('..', '.'));
        echo "<br/>";
        foreach ($hren as $img){
            if (($count % 2) == 0){
                echo '<img src="' . 'uploads/' . $img . '" width = "250px" /><br>';
            }
            else {
                echo '<img src="' . 'uploads/' . $img . '" width = "250px" />';
            }
            $count++;
        }
    }

    function start(){
        if ($_FILES){
            $name = [];
            $path = [];
            writing($name,$path); //запис в два неіндексні масиви назви і шляхи до файлів
            move_from_temp($name,$path);
            display_img($path);
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
    <style>
        img {
            margin: 20px;
        }
    </style>
</head>
<body>
<form action="" method="post" enctype="multipart/form-data">
    <input type="file" name="picture[]" multiple accept=".jpg, .jpeg, .png, .gif"><br><br>
    <button type="submit">Do it!</button>
    <img src="" alt="">
    <?php
    var_dump($_FILES);die();
    start(); ?>
</form>
</body>
</html>
