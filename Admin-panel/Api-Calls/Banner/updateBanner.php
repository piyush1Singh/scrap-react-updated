<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$json = json_decode($json);
if (isset($json->id)) {
    $id = $json->id;
    $bannerHeader = $json->bannerHeader;
    $bannerTitle = $json->bannerTitle;
    // $bannerImg = $json->bannerImg;
    $bannerStatus = $json->bannerStatus;

    $query = "UPDATE `banner` SET `header`='$bannerHeader',`title`='$bannerTitle',`status`='$bannerStatus' WHERE id = $id";
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
