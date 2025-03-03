<?php
require '../config/db.php'; // Database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $full_name = $_POST['full_name'] ?? '';
    $username = $_POST['username'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $password = $_POST['password'] ?? '';
    $confirm_password = $_POST['confirm_password'] ?? '';
    $gender = $_POST['gender'] ?? '';

    if (empty($full_name) || empty($username) || empty($email) || empty($phone) || empty($password) || empty($confirm_password) || empty($gender)) {
        echo "<script>alert('All fields are required.'); window.history.back();</script>";
        exit();
    }

    if ($password !== $confirm_password) {
        echo "<script>alert('Passwords do not match.'); window.history.back();</script>";
        exit();
    }

    // Check if username or email already exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ? OR email = ?");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        echo "<script>alert('Username or Email already exists.'); window.history.back();</script>";
        exit();
    }
    $stmt->close();

    // Hash password before storing
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    // Insert into database
    $stmt = $conn->prepare("INSERT INTO users (full_name, username, email, phone, password, gender) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $full_name, $username, $email, $phone, $hashedPassword, $gender);

    if ($stmt->execute()) {
        echo "<script>alert('Registration successful! Redirecting to login...'); window.location.href='../login.html';</script>";
        exit();
    } else {
        echo "<script>alert('Database error: " . $conn->error . "');</script>";
    }
}
?>
