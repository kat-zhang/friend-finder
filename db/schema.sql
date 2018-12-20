CREATE DATABASE survey_db
USE survey_db;

CREATE TABLE questions (
id INT(11) AUTO_INCREMENT NOT NULL,
question TEXT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE ratings (
rating TEXT
);
