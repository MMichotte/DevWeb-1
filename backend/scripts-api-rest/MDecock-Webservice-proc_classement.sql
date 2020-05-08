CREATE PROCEDURE "dba"."Proc_classement"()

RESULT(pseudo varchar(25), score int)
BEGIN
    call sa_set_http_header( 'Access-Control-Allow-Origin','*');
    call sa_set_http_header( 'Content-Type', 'text/html' ); 
    
	SELECT pseudeo, score 
    FROM classement as c 
	join utilisateur as u on c.userId = u.userId
	order by score, pseudo
	
END