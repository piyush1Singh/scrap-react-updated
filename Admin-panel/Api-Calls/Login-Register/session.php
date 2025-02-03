<?php
session_start();
include "../Database/database.php";



// Fix CORS issues
header("Access-Control-Allow-Origin: *"); // Replace with frontend URL
header("Access-Control-Allow-Credentials: true"); // Allow credentials
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");

// Debugging: Check if session is being set
if (isset($_SESSION["email"])) {
    echo json_encode(["session" => true, "email" => $_SESSION["email"]]); // Send session email for debugging
} else {
    echo json_encode(["session" => false, "message" => "No active session"]);
}
exit();
?>
