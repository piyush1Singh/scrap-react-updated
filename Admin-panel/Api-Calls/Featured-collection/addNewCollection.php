<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
$filename = explode(".", $json->file)[1];
if (($filename == "jpg" || $filename == "png" || $filename == "raw" || $filename == "jpeg") &&
    isset($json->collectionHeader) && isset($json->collectionStatus) && $json->collectionHeader != "" && $json->file !== "" && $json->collectionStatus != ""
) {

    $collectionHeader = $json->collectionHeader;
    $filename = date("yyymmdhis") . "." . $filename;
    $collectionStatus = $json->collectionStatus;

    file_put_contents('../../Dashboard-admin/src/assets/collectionImages/' . $filename, file_get_contents($json->imageData));
    $query = "INSERT INTO `featured_collection`(`f_name`, `f_img`, `f_status`) VALUES ('$collectionHeader','$filename','$collectionStatus')";
    if (mysqli_query($conn, $query)) {
        $result = ["status" => "success"];
        $row = json_encode($result);
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
