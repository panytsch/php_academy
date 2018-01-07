<form name="authForm" method="GET" action="<?=$_SERVER['PHP_SELF']?>">
    a:<input type="number" name="a">
    <input type="submit">
</form>
<?php

$a=$_GET['a'];
$summ = null;

for ($i=0;$i<strlen($a);$i++){
    $summ +=mb_substr($a,$i,1);
}

echo "Сумма всіх введених цифер = " . $summ;