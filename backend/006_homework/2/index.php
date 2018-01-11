<?php

$actions = [
    'home',
    'contact',
    'about',
    'history'
];

$action = $_GET['action'] ?? 'home';

if (!in_array($action, $actions)) {
    die('Page not found');
}

echo render($action . '.php');

function render(string $view, array $items = []) : string
{
    extract($items, EXTR_SKIP);
    ob_start();

    require __DIR__ . '/pages/' . $view;

    return ob_get_clean();
}
?>