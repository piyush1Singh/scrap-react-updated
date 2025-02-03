<?php
session_start();
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$input = json_decode($json);

$email_id = $input->email;
$password = $input->password;

$query = "Select * from vendor_login Where email = '$email_id' And password = '$password'";

$result = mysqli_query($conn, $query);
if (mysqli_num_rows($result) > 0) {
    $_SESSION["email"] = $email_id;
    $res =  mysqli_fetch_row($result);
    //   print_r($res);exit;
    $result = ["status" => true, "user_id" => $res[0]];

    $result = json_encode($result);
    print_r($result);
} else {
    $result = ["status" => false];

    $result = json_encode($result);
    print_r($result);
}
