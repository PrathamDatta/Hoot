<?php
session_start();
header("Content-Type: application/json");
require '../config/db.php';

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM admin WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$admin = $result->fetch_assoc();

if ($admin && password_verify($password, $admin["password"])) {
    $_SESSION["admin"] = $admin["id"];
    echo json_encode(["success" => true, "redirect" => "admin_dashboard.php"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid credentials"]);
}
?>
