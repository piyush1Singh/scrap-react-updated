<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
if (isset($json->id)) {
    $id = $json->id;
    $collectionHeader = $json->collectionHeader;
    $collectionImg = $json->collectionImg;
    $collectionStatus = $json->collectionStatus;

    $query = "UPDATE `featured_collection` SET `f_name`='$collectionHeader',`f_img`='$collectionImg',`f_status`='$collectionStatus' WHERE id = $id";
    // echo $query;exit;
    if (mysqli_query($conn, $query)) {
        $result = ["status" => "success"];
        $row = json_encode($result);
        // echo "<pre>";
        print_r($row);
    } else {
        $result = ["status" => "No Id Found 1"];
        $row = json_encode($result);
        print_r($row);
        
    }
} else {
    $result = ["status" => "No Id Found 2"];
    $row = json_encode($result);
    print_r($row);
    
}
