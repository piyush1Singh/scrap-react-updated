<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');
$json = file_get_contents('php://input');
$input = json_decode($json);
// print_r($input);die();
$f_name= $input->f_name;
$l_name= $input->l_name;
$address= $input->address;
$city= $input->city;
$state= $input->state;
$zipcode= $input->zipcode;
$mobile_number= $input->mobile_number;
$user_id= $input->user_id;

$query = "SELECT * FROM `user_address` WHERE user_id = $user_id";

$result = mysqli_query($conn,$query);
if(mysqli_num_rows($result)==0){
  $query ="INSERT INTO `user_address`(`f_name`, `l_name`, `address`, `city`, `state`, `zipcode`, `country`, `mobile_number`,`user_id`) VALUES ('$f_name','$l_name','$address','$city','$state','$zipcode','$country','$mobile_number','$user_id')";

  if(mysqli_query($conn,$query)){
    $result = ["status"=>true];

    $result = json_encode($result);
    print_r($result);
  }
}else{
  $query ="UPDATE `user_address` SET `f_name`='$f_name',`l_name`='$l_name',`address`='$address',`city`='$city',`state`='$state',`zipcode`='$zipcode',`country`='$country',`mobile_number`='$mobile_number',`user_id`='$user_id' WHERE user_id = $user_id";

  if(mysqli_query($conn,$query)){
    $result = ["status"=>true];

    $result = json_encode($result);
    print_r($result);
  }else
    $result = ["status"=>false];
    $result = json_encode($result);
    print_r($result);
}
