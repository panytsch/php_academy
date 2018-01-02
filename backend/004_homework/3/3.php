<?php
    function shit(){
        $file_path = __DIR__ . '/files/';
        $file_name = $_FILES["file"]["name"];
//        var_dump($_FILES);die();
        move_uploaded_file($_FILES["file"]["tmp_name"], $file_path . $file_name);
        $count = $_POST["count"];
        delete_words($count, $file_path, $file_name);

    }

    function delete_words(string $length, string $path, string $name){
        $file = fopen($path . $name, 'r+');
        if ($file === false) {
            exit("Не удалось открыть");
        }
//        while(!feof($file)){
            $line = fgets($file);
            $content = explode(' ', $line);
            rewind($file);
            foreach ($content as $item){
                if (mb_strlen($item)<=$length){
                    fwrite($file, $item . " ");
                }
            }
//            var_dump($content);die();

//        }
        fclose($file);
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
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file" name="file"><br><br>
        <input type="text" name="count"><br><br>
        <button type="submit">OK</button>
    </form>
    <?php
    shit();
    ?>
</body>
</html>
