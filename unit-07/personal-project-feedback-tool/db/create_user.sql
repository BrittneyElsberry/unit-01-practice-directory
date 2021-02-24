INSERT INTO users (username, password, dept_number, user_admin)
VALUES ($1, $2, $3, $4)
returning *;


    
