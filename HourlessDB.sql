CREATE SCHEMA `hourless`;

USE `hourless`;

CREATE TABLE user_type (
	id INT NOT NULL PRIMARY KEY,
    rol VARCHAR(10) NOT NULL
);

CREATE TABLE agreement (
	id INT NOT NULL PRIMARY KEY,
	agr_name VARCHAR(80) NOT NULL,
    annual_hours LONG NOT NULL
);


CREATE TABLE registered_user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    rol INT, 
    FOREIGN KEY (rol) REFERENCES user_type(id)
);

CREATE TABLE employee (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	user_id INT,
    section VARCHAR(40) NOT NULL,
    weekly_worked_hours DOUBLE NOT NULL,
    monthly_worked_hours DOUBLE NOT NULL,
    user_status TINYINT,
    agreement INT,
    FOREIGN KEY (user_id) REFERENCES registered_user(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (agreement) REFERENCES agreement(id) ON DELETE CASCADE ON UPDATE CASCADE
);


