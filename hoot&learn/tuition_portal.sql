CREATE DATABASE tuition_portal;
USE tuition_portal;

-- Table for storing users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing admin login credentials
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Insert default admin (password: admin123)
INSERT INTO admin (username, password) VALUES ('admin', '$2y$10$uX.eQ6u7XAnsl1LoD9M.Hu3Q9W57WvNRGAE2A.6f0/Ujknr38EzpG'); 
-- 'admin123' hashed using password_hash('admin123', PASSWORD_BCRYPT)
