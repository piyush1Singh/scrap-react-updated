<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
if (isset($json->id)) {
    $id = $json->id;
    $productName = $json->productName;
    $productDesc = $json->productDesc;
    $productPrice = $json->productPrice;
    // $productImg = $json->productImg;
    $rating = $json->rating;
    $category = $json->category;
    $status = $json->status;

    $query = "UPDATE `product` SET `product_name`='$productName',`product_desc`='$productDesc',`product_price`='$productPrice',`category_id`='$category',`rating`='$rating',`status`='$status' WHERE id = $id";
    if (mysqli_query($conn, $query)) {
        $result = ["status" => "success"];
        $row = json_encode($result);
        // echo "<pre>";
        print_r($row);
    } else {
        $result = ["status" => "No Id Found"];
        $row = json_encode($result);
        print_r($row);
    }
} else {
    $result = ["status" => "No Id Found"];
    $row = json_encode($result);
    print_r($row);
}