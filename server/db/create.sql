CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE item (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    quantity INT DEFAULT 0,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);
INSERT INTO user (username, email, password)
VALUES
('john_doe', 'john@example.com', 'hashed_password_123'),
('jane_smith', 'jane@example.com', 'hashed_password_456'),
('mike_jones', 'mike@example.com', 'hashed_password_789');
INSERT INTO item (user_id, name, description, quantity, price)
VALUES
(1, 'Laptop', 'Dell XPS 13, 16GB RAM', 5, 1299.99),
(1, 'Mouse', 'Logitech Wireless Mouse', 20, 25.50),
(2, 'Phone', 'iPhone 12, 128GB', 3, 799.99),
(2, 'Headphones', 'Bose QuietComfort 35', 10, 299.99),
(3, 'Monitor', 'Samsung 27" 4K', 8, 450.00),
(3, 'Keyboard', 'Mechanical Keyboard', 15, 99.99);
