<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
if (isset($json->id) && isset($json->categoryName) && isset($json->categoryDesc) && isset($json->categoryImg) && isset($json->status)) {
    $id = $json->id;
    $categoryName = $json->categoryName;
    $categoryDesc = $json->categoryDesc;
    // $categoryImg = $json->categoryImg;
    $status = $json->status;


    $query =  "UPDATE `categories` SET `category_name`='$categoryName',`category_desc`='$categoryDesc',`status`='$status' WHERE id = $id";
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
