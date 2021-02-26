/*To Create Tables*/


Drop table if exists feedback;
Drop table if exists category;
Drop table if exists department;
Drop table if exists users;

CREATE TABLE users(
    
user_id SERIAL PRIMARY KEY, 
username VARCHAR(255) NOT NULL, 
password VARCHAR(5000) NOT NULL, 
dept_number INT NOT NULL, 
user_admin BOOLEAN DEFAULT FALSE NOT NULL);


CREATE TABLE category(

category_id SERIAL PRIMARY KEY,
category_name VARCHAR(255)


);

CREATE TABLE department(

dept_id SERIAL PRIMARY KEY,
dept_number INT,
dept_name VARCHAR(255) NOT NULL,
manager_name VARCHAR(255) NOT NULL

);


CREATE TABLE feedback (

feedback_id SERIAL PRIMARY KEY,
category_id INT REFERENCES category(category_id) NOT NULL,
dept_id INT REFERENCES department(dept_id) NOT NULL,
user_id INT REFERENCES users(user_id) NOT NULL,
feedback VARCHAR(5000),
fb_date date


);