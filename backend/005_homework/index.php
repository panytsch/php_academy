<?php

function writing(array &$name, array &$path){
    foreach ($_FILES['file'] as $val1 => $karton){
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

function check_img (string $name) : bool {
    $arr = ['jpeg', 'png', 'jpg', 'gif'];
    $buff = explode('.', $name);
    $last = end($buff);
    return in_array($last, $arr);
}

function move_from_temp (array $name, array &$path){
    if(!is_dir(__DIR__ . '/img')){
        mkdir(__DIR__ . '/img');
    }if(!is_dir(__DIR__ . '/doc')){
        mkdir(__DIR__ . '/doc');
    }
    for ($i=0; $i<count($path); $i++) {
        $old_path = $path[$i];
        if (check_img($name[$i])){
            $path[$i] = __DIR__ . '/img/';
        }
        else{
            $path[$i] = __DIR__ . '/doc/';
        }
        move_uploaded_file($old_path,$path[$i] . $name[$i]);
    }
    $path = $path[0];
}

function check(){
    if ($_FILES){
        $name = [];
        $path = [];
        writing($name,$path);
        move_from_temp($name, $path);
    }
}

function show_pic(string $dir = 'img/'){
    $count =1;
    $hren = array_diff( scandir( $dir), array('..', '.'));
    asort($hren);
    echo "<br/>";
    foreach ($hren as $img){
        if (($count % 2) == 0){
            echo '<img src="' . $dir . $img . '" width = "250px" /><br>';
        }
        else {
            echo '<img src="' . $dir . $img . '" width = "250px" />';
        }
        $count++;
    }
}
function show_doc(string $dir = 'doc/'){
    $hren = array_diff( scandir( $dir), array('..', '.'));
    asort($hren);
    foreach ($hren as $img){
        echo '<a href="' . $dir . $img . '"/>' . $img . '<a/><br>';
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
    <link rel="stylesheet" href="./style.css">
    <base href="#" target="_blank">
</head>
<body>
<div class="cont">
    <div class="pic">
        <p>Downloaded images</p>
        <?php
        check();
        show_pic();
        ?>
    </div>
    <div class="doc">
        <p>Downloaded docs</p>
        <?php
        check();
        show_doc();
        ?>
    </div>
</div>

<form action="" method="post" enctype="multipart/form-data">
    <input type="hidden" name="MAX_FILE_SIZE" value="2097152" />
    <input type="file" name="file[]" multiple>
    <br><br>
    <button type="submit" formtarget="_self">Send</button>
</form>
</body>
</html>
