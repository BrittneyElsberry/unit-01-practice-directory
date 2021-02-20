DROP TABLE careerAcc if exists;

CREATE TABLE careerAcc (
accomp_id INT PRIMARY KEY, 
accomplishments VARCHAR(2000));

INSERT INTO careerAcc(accomp_id, accomplishments)
VALUES (1, 'Team metrics exceeded expectations for FY21');

SELECT * from careerAcc;