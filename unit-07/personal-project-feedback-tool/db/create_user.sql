INSERT INTO users (username, password, dept_number) /*adding admin functionality later*/
VALUES ($1, $2, $3)
returning *;


    
