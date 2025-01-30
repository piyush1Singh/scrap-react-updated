<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');
$json = file_get_contents('php://input');
// print_r($json);die("first json");
$json = json_decode($json);
$filename = explode(".", $json->file)[1];

if (($filename == "jpg" || $filename == "png" || $filename == "raw" || $filename == "jpeg") &&
    isset($json->productName) && isset($json->productDesc) && isset($json->productPrice) && isset($json->category) && isset($json->rating) && isset($json->user_id) && isset($json->status) && $json->productName != "" && $json->productDesc != "" && $json->file != "" && $json->productPrice != "" && $json->category != "" && $json->rating != "" && $json->user_id != "" && $json->status != ""
) {
    $productName = $json->productName;
    $productDesc = $json->productDesc;
    $filename = date("yyymmdhis") . "." . $filename;
    $productPrice = $json->productPrice;
    $category = $json->category;
    $rating = $json->rating;
    $user_id = $json->user_id;
    $status = $json->status;

    $query  = "INSERT INTO `product`(`product_name`, `product_desc`, `product_img`, `product_price`, `category_id`, `rating`, `user_id`, `status`) VALUES ('$productName','$productDesc','$filename','$productPrice','$category','$rating','$user_id','$status')";
    // echo $query;exit;

    $imageData  = $json->imageData;
 
    file_put_contents('../../Dashboard-admin/src/assets/productImages/' . $filename, file_get_contents($json->imageData));
    if (mysqli_query($conn, $query)) {
        $result = ["status" => "success"];
        $row = json_encode($result);
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
