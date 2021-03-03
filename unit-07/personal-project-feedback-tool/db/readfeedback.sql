select * from feedback f 
join category c on c.category_id = f.category_id
where user_id = $1;