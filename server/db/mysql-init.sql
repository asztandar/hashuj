CREATE DATABASE hashuj;
USE hashuj;

CREATE TABLE `hash` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `hash` VARCHAR(32) NOT NULL,
  `tekst` TEXT NOT NULL,
  PRIMARY KEY (`id`)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;