/*To Create Tables*/

CREATE TABLE users(
    
user_id SERIAL PRIMARY KEY, 
username VARCHAR(255) NOT NULL, 
password VARCHAR(5000) NOT NULL, 
dept_number INT NOT NULL, 
user_admin BOOLEAN NOT NULL);





CREATE TABLE feedback (

feedback_id SERIAL PRIMARY KEY,
category_id INT NOT NULL UNIQUE,
dept_number INT NOT NULL,
user_id INT REFERENCES users(user_id) NOT NULL,
feedback VARCHAR(5000)


);


CREATE TABLE category(

category_id INT PRIMARY KEY REFERENCES feedback(category_id) UNIQUE,
category_name VARCHAR(255)


);

CREATE TABLE department(
dept_number INT PRIMARY KEY,
dept_name VARCHAR(255) NOT NULL,
manager_name VARCHAR(255) NOT NULL


);