<?php
//function __autoload ($classname){
//    require_once('./class/class.' . $classname . '.php');
//}

$actions = [
    'form',
    'login_page',
];
$action = $_GET['action'] ?? 'form';
var_dump($_GET);

if (!in_array($action,$actions)){
    die('Page not found');
}

require __DIR__.'/pages/'.$action.'.php';