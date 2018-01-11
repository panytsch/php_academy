<?php require __DIR__ . '/header.php';
session_start();?>
    History: <br><br>
<?php
foreach ($_SESSION['history'] as $item){
    echo '<a href="?action=' . $item . '">' . $item . '</a><br>';
}
require __DIR__ . '/footer.php';
$_SESSION['history'][] = 'history'
?>