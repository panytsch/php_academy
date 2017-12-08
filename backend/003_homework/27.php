<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>004_les</title>
    <link rel="stylesheet" href="styl.css">
</head>
<body>
<table>
<?php
$row = rand(5,16);
$cols = rand(5,18);
$colors = ['red','yellow','blue','gray','maroon','brown','green'];
$min_num = 1;
$max_num = 99999;

for($i=0;$i<$row;$i++){
    echo "<tr>";
    for ($j=0;$j<$cols;$j++){
        echo '<td bgcolor="'. $colors[rand(0,count($colors)-1)] .'">' . rand($min_num,$max_num) . '</td>';
    }
    echo "</tr>";
}

?>
</table>
</body>
</html>
