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
    exit();
}
session_start();

$json = file_get_contents('php://input');
$json = json_decode($json);
function checkifempty($arr, $json)
{
    for ($i = 0; $i < count($arr); $i++) {
        if ($json->id == $arr[$i]['id']) {
            $_SESSION['cart'][$i]['quantity'] += $json->quantity;
            return ["status" => false, "index" => $i];
        }
    }

    array_push($_SESSION['cart'], [
        'id' => $json->id,
        'quantity' => $json->quantity,
    ]);
}
if (!empty($_SESSION)) {
    checkifempty($_SESSION['cart'], $json);
    print_r(json_encode($_SESSION['cart']));
} else {

    $_SESSION['cart'] = array();
    array_push($_SESSION['cart'], [
        'id' => $json->id,
        'quantity' => $json->quantity,
    ]);
    print_r(json_encode($_SESSION['cart']));
    die();
}
