CREATE DATABASE IF NOT EXISTS teamdb;
USE teamdb;

CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO destinations (name, description, image_url) VALUES
(
  'Paris, France',
  'Experience the City of Light, famous for its art, fashion, gastronomy, and culture.',
  'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'
),
(
  'New York City, USA',
  'The city that never sleeps, offering world-class entertainment, food, and landmarks.',
  'https://static.stacker.com/s3fs-public/styles/1280x720/s3/2024-10/shutterstock_1429324979_0.jpg?token=ahWHMXU5'
),
(
  'Tokyo, Japan',
  'A vibrant mix of modern life and traditional culture, known for technology and cuisine.',
  'https://static.toiimg.com/thumb/57961644.cms?resizemode=75&width=1200&height=900'
),
(
  'Rome, Italy',
  'Explore ancient history, stunning architecture, and authentic Italian cuisine.',
  'https://cms.travelnoire.com/cdn-cgi/image/format=auto,slow-connection-quality=30,onerror=redirect/https://cms.travelnoire.com/wp-content/uploads/2018/12/jakob-owens-713984-unsplash.jpg'
),
(
  'Bali, Indonesia',
  'A tropical paradise known for beaches, temples, and lush landscapes.',
  'https://thebalisun.com/wp-content/uploads/2025/04/Tighter-Security-Present-At-Balis-Top-Tourist-Attractions-.jpg'
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);