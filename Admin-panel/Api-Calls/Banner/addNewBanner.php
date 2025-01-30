<?php
// phpinfo();die();
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');
$json = file_get_contents('php://input');
// print_r($json);die("first json");
$json = json_decode($json);
$filename = explode(".", $json->file)[1];

if (($filename == "jpg" || $filename == "png" || $filename == "raw" || $filename == "jpeg") &&
    isset($json->bannerHeader) && isset($json->bannerTitle) && isset($json->bannerStatus) && $json->bannerHeader != "" && $json->bannerTitle != "" && $json->file != "" && $json->bannerStatus != ""
) {

    $bannerHeader = $json->bannerHeader;
    $bannerTitle = $json->bannerTitle;
    $bannerStatus = $json->bannerStatus;
    $filename = date("yyymmdhis") . "." . $filename;
    file_put_contents('../../Dashboard-admin/src/assets/bannerImages/' . $filename, file_get_contents($json->imageData));
    $query = "INSERT INTO `banner`(`header`, `title`, `image`, `status`) VALUES ('$bannerHeader','$bannerTitle','$filename','$bannerStatus')";
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
