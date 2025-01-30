<?php
include "../Database/database.php";
header('Access-Control-Allow-Origin: *'); // replace with your React app's domain
header('Access-Control-Allow-Headers: Content-Type');
// $json = file_get_contents('php://input');
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the image data from the request body
  $imageData = file_get_contents('php://input');
  // print_r($imageData);die();
  // Create a filename for the image
  $filename = uniqid() . '.png';
  // Save the image file to a directory
  file_put_contents('path/to/images/' . $filename, $imageData);
  // Return a response
  echo 'Image saved successfully';
} else {
  // Return an error response for non-POST requests
  http_response_code(405);
  echo 'Method not allowed';
}
