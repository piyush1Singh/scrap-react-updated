<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // Replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$json = file_get_contents('php://input');
$json = json_decode($json);

if (isset($json->id)) {
    $id = $json->id;
    $productName = $json->productName;
    $productDesc = $json->productDesc;
    $productPrice = $json->productPrice;
    $productImg = $json->productImg; // Existing image filename
    $rating = $json->rating;
    $category = $json->category;
    $status = $json->status;
    $imageData = $json->imageData ?? null;

    // If a new image is provided, decode and save it
    if ($imageData) {
        // Extract the file extension from the Base64 data
        preg_match('/^data:image\/(\w+);base64,/', $imageData, $matches);
        $extension = $matches[1] ?? 'jpg'; // Default to JPG if extension not found

        // Generate a new unique filename
        $newFilename = date("YmdHis") . "." . $extension;
        $imagePath = "../../Dashboard-admin/src/assets/productImages/" . $newFilename;

        // Remove the data URI prefix and decode the Base64 string
        $imageData = preg_replace('/^data:image\/\w+;base64,/', '', $imageData);
        $imageData = base64_decode($imageData);

        if (file_put_contents($imagePath, $imageData)) {
            $productImg = $newFilename; // Use the new image filename in the update query
        } else {
            echo json_encode(["status" => "error", "message" => "Failed to save image."]);
            exit;
        }
    }

    // Update query
    $query = "UPDATE `product` SET 
        `product_name` = '$productName',
        `product_desc` = '$productDesc',
        `product_img` = '$productImg',
        `product_price` = '$productPrice',
        `category_id` = '$category',
        `rating` = '$rating',
        `status` = '$status' 
        WHERE id = $id";

    if (mysqli_query($conn, $query)) {
        echo json_encode(["status" => "success", "imagePath" => $imagePath ?? null]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update product."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "No ID provided."]);
}
?>
