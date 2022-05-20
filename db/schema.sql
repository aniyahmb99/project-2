DROP DATABASE IF EXISTS project_2;

CREATE DATABASE project_2;

USE project_2;


CREATE TABLE holidays (
    id INT NOT NULL AUTO_INCREMENT,
    holiday_name VARCHAR(30),
    greeting VARCHAR(30),
    holiday_date date,
    PRIMARY KEY (id)
);



