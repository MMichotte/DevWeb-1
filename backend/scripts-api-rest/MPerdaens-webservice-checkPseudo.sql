ALTER PROCEDURE "dba"."proc_connexion"(in pseudoIn VARCHAR(50), in mdpIn VARCHAR(100))

RESULT(userId int, nom VARCHAR(50), prenom VARCHAR(50), pseudo varchar(50))
BEGIN
    call sa_set_http_header( 'Access-Control-Allow-Origin','*');
    IF ( (SELECT  mdpCheck(pseudoIn, mdpIn)) = 1)
    THEN 
        BEGIN 
            SELECT userId, nom, prenom, pseudo
            FROM utilisateurs
            WHERE pseudo = pseudoIn;
        END
     ELSE 
        BEGIN 
            select -1;
        END
    ENDIF  
END

CREATE SERVICE "connexion" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_connexion(pseudoIn = :pseudo, mdpIn= :mdp);
