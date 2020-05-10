CREATE PROCEDURE "DBA"."proc_majScore"(in idin int, in scorein double )

result(information varchar(50))
BEGIN


    IF not EXISTS (
        SELECT userId
        FROM  classement
        WHERE userId LIKE idin
    )
            THEN
                 BEGIN
                    INSERT INTO classement (userId, score)
                    VALUES (idin, scorein);
                    SELECT 'score ajouter';
                END
    ELSEIF EXISTS
                    (
                    SELECT  userId, score
                    FROM classement
                    WHERE userId LIKE idin AND  score < scorein
                    )
            THEN
                BEGIN
                    UPDATE classement
                    SET score = scorein
                    WHERE userId LIKE idin;
                    SELECT  'score mis à jour';
                END
    ELSE
                BEGIN
                    SELECT 'score inférieur'
                END
    ENDIF


END
-----------------------------------------------------------------------------

CREATE SERVICE "majScore" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_majScore(idin= :idin,  scorein= :scorein)
