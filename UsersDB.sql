CREATE SCHEMA `users`;

USE `users`;

CREATE TABLE user_type (
	id INT NOT NULL PRIMARY KEY,
    rol VARCHAR(10) NOT NULL
);

CREATE TABLE client (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
	first_name VARCHAR(50),
    last_name VARCHAR(100),
    rol INT NOT NULL,
    sex TINYINT,
    user_status TINYINT,
    FOREIGN KEY (rol) REFERENCES user_type(id) ON DELETE CASCADE ON UPDATE CASCADE
);


