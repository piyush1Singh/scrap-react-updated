<?php
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Allow these HTTP methods for the preflight request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // print_r($_SERVER['REQUEST_METHOD'] == 'OPTIONS');die();
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);
}
session_start();

$json = file_get_contents('php://input');
$json = json_decode($json);
function checkCartId($id)
{
    foreach ($_SESSION['cart'] as $product) {
        print_r($product);
    }
}
if (isset($json->id)) {

    checkCartId($json->id);
}
