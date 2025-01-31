<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // Replace with your React app's domain for security
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Get JSON data from request
$json = file_get_contents('php://input');

// Log request data for debugging
file_put_contents("log.txt", $json);

$json = json_decode($json);

if (!$json) {
    die(json_encode(["status" => "Invalid JSON"]));
}

// Check if all required fields are set and not empty
$requiredFields = ['file', 'productName', 'productDesc', 'productPrice', 'category', 'rating', 'user_id', 'status', 'imageData'];
foreach ($requiredFields as $field) {
    if (!isset($json->$field) || empty($json->$field)) {
        die(json_encode(["status" => "Missing or empty field: $field"]));
    }
}

// Extract file extension safely
$fileParts = explode(".", $json->file);
if (count($fileParts) < 2) {
    die(json_encode(["status" => "Invalid file format"]));
}

$extension = strtolower(end($fileParts));

// Validate file extension
$allowedExtensions = ["jpg", "png", "jpeg", "raw"];
if (!in_array($extension, $allowedExtensions)) {
    die(json_encode(["status" => "Invalid file extension"]));
}

// Assign variables from JSON
$productName = mysqli_real_escape_string($conn, $json->productName);
$productDesc = mysqli_real_escape_string($conn, $json->productDesc);
$filename = date("YmdHis") . "." . $extension; // Unique filename
$productPrice = mysqli_real_escape_string($conn, $json->productPrice);
$category = mysqli_real_escape_string($conn, $json->category);
$rating = mysqli_real_escape_string($conn, $json->rating);
$user_id = mysqli_real_escape_string($conn, $json->user_id);
$status = mysqli_real_escape_string($conn, $json->status);
$imageData = $json->imageData; // Base64 or URL

// Save the image to the server
$imagePath = '../../../src/assets/productImages/' . $filename;
file_put_contents($imagePath, file_get_contents($imageData));

// Insert product data into database
$query = "INSERT INTO `product`(`product_name`, `product_desc`, `product_img`, `product_price`, `category_id`, `rating`, `user_id`, `status`) 
          VALUES ('$productName','$productDesc','$filename','$productPrice','$category','$rating','$user_id','$status')";

if (mysqli_query($conn, $query)) {
    echo json_encode(["status" => "success", "message" => "Product added successfully", "filename" => $filename]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error: " . mysqli_error($conn)]);
}
?>
