INSERT INTO comments (comment, feedback_id, user_id, date)
values($1, $2, $3, $4)
returning *;