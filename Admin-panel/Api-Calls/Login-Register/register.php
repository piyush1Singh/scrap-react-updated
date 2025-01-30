<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$input = json_decode($json);
// print_r($input);die();
$email_id= $input->email;
$password= $input->password;

$query = "Select * from admin_login Where email = '$email_id' And password = '$password'";

$result = mysqli_query($conn,$query);
if(mysqli_num_rows($result)==0){
  $query ="INSERT INTO `admin_login`(`email`, `password`) VALUES ('$email_id','$password')";

  if(mysqli_query($conn,$query)){
    $result = ["status"=>true];

    $result = json_encode($result);
    print_r($result);
  }
}else{
    $result = ["status"=>false];
    $result = json_encode($result);
    print_r($result);
}
