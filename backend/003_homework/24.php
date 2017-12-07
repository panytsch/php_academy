<form name="authForm" method="GET" action="<?=$_SERVER['PHP_SELF']?>">
    Введіть число в якому будемо шукати:<input type="number" name="long" value="442158755745"><br/><br/>
    Введіть цифру, яку будемо шукати:<input type="number" name="num" value="5">
    <input type="submit">
</form>
<?php
$long = $_GET['long'];
$num = $_GET['num'];

$count = null;
for ($i=0;$i<strlen($long);$i++){
    if ($num == mb_substr($long, $i, 1)){
        $count+=1;
    }
}

echo $count;