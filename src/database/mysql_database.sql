-- CREATE DATABSE
DROP DATABASE IF EXISTS node_web;
CREATE DATABASE node_web CHARACTER SET UTF8 COLLATE utf8_bin;

USE node_web;

-- CREATE USER AND GRANT ACCESS TO DATABASE
CREATE USER IF NOT EXISTS 'node_user'@'localhost' IDENTIFIED BY 'ZHeg5X0Ti12244Fk';
GRANT SELECT, INSERT, DELETE, UPDATE ON node_web.* TO 'node_user'@'localhost';
FLUSH PRIVILEGES;


-- CREATE TABLE
CREATE TABLE contact (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthdate DATETIME,
    creationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updateDate DATETIME ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE user (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(256) NOT NULL,
    isEnabled BOOLEAN DEFAULT TRUE,
    creationDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updateDate DATETIME ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Steven', 'Rogers', '1921-01-28');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Clint', 'Barton', '1995-05-10');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Peter', 'Quill', '1984-10-17');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Peter', 'Parker', '1982-12-08');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Carol', 'Danvers', '1975-05-12');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Bruce', 'Banner', '1968-04-29');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Natasha', 'Romanoff', '1995-06-24');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Tony', 'Stark', '1968-04-15');

INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Bruce', 'Wayne', '1968-03-02');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Alfred', 'Pennyworth', '1938-10-12');
INSERT INTO contact(firstname, lastname, birthdate) VALUES ('Clark', 'Kent', '1974-10-22');

