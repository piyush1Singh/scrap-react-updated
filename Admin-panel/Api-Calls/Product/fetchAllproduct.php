<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$query  = "SELECT * FROM `product`  ORDER BY ID DESC Limit 10";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_all($result);
    $row = json_encode($row);
    print_r($row);
} else {
    $result = ["status" => false];

    $result = json_encode($result);
    print_r($result);
}
