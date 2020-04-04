CREATE FUNCTION "DBA"."mdpCheck"(in ps varchar(50), in pwd varchar(100))
RETURNS BIT                              
BEGIN

    IF EXISTS (
        SELECT pseudo, mdp FROM dba.utilisateurs
        WHERE pseudo LIKE ps AND mdp like pwd
    )
    THEN RETURN 1;    
    ELSE RETURN 0;   
    ENDIF;

END;