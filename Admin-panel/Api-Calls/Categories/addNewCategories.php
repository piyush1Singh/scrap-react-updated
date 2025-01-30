<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
$filename = explode(".", $json->file)[1];

if (($filename == "jpg" || $filename == "png" || $filename == "raw" || $filename == "jpeg") && isset($json->category_name) && isset($json->category_desc) && isset($json->user_id) && $json->category_name != "" && $json->category_desc != "" && $json->file != "") {
    $category_name = $json->category_name;
    $category_desc = $json->category_desc;
    $user_id = $json->user_id;
    $status = $json->status;
    $filename = date("yyymmdhis") . "." . $filename;

    $query  = "INSERT INTO `categories`(`category_name`, `category_desc`, `category_img`, `user_id`, `status`) VALUES ('$category_name','$category_desc','$filename','$user_id','$status')";

    file_put_contents('../../Dashboard-admin/src/assets/categoriesImages/' . $filename, file_get_contents($json->imageDate));
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
