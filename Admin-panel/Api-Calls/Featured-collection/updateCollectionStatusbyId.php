<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
if (isset($json->id) && isset($json->status)) {
    $id = $json->id;
    $status = $json->status;


    $query =  "UPDATE `featured_collection` SET `f_status`='$status' WHERE id = $id";
    // echo $query;exit;
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
