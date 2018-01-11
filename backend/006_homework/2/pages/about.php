<?php require __DIR__ . '/header.php'; ?>
    About
<?php require __DIR__ . '/footer.php';
session_start();
$_SESSION['history'][] = 'about'
?>