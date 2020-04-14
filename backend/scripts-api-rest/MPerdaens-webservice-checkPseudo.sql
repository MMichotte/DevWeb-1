CREATE PROCEDURE "dba"."proc_checkPseudo"(in pseudoIn VARCHAR)

RESULT(pseudo varchar(50))
BEGIN
    call sa_set_http_header( 'Access-Control-Allow-Origin','*');
    call sa_set_http_header( 'Content-Type', 'text/html' );
    SELECT pseudo
    FROM utilsateurs
END

CREATE SERVICE "connexion" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_checkPseudo(pseudoIn= :pseudo);
