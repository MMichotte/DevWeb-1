/* auteur: maxime De Cock HE201554  */

CREATE PROCEDURE "DBA"."proc_classement"()

RESULT(pseudo VARCHAR (50), score DOUBLE )
BEGIN
    call sa_set_http_header( 'Access-Control-Allow-Origin','*');

	SELECT pseudo, score
    FROM classement as c
	join utilisateurs as u on c.userId = u.userId
	order by c.score DESC , u.pseudo

END

--------------------------------------------------------------------------------------------------

CREATE SERVICE "classement" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_classement();
