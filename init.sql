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
  'https://images.unsplash.com/photo-1549924231-f129b911e442'
),
(
  'Tokyo, Japan',
  'A vibrant mix of modern life and traditional culture, known for technology and cuisine.',
  'https://images.unsplash.com/photo-1549692520-acc6669e2f0c'
),
(
  'Rome, Italy',
  'Explore ancient history, stunning architecture, and authentic Italian cuisine.',
  'https://images.unsplash.com/photo-1526481280691-906c4c85c1a6'
),
(
  'Bali, Indonesia',
  'A tropical paradise known for beaches, temples, and lush landscapes.',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
);
