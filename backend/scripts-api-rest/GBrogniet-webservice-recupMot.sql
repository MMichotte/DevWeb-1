/*  author : Brogniet Geoffrey - HE201652 */
CREATE PROCEDURE "dba"."mots"(in langueIdIn VARCHAR(2))

RESULT(languesId varchar(2), mot VARCHAR(50), nom VARCHAR(30))
BEGIN
    call sa_set_http_header( 'Access-Control-Allow-Origin','*');
    SELECT Mo.languesId, mot, nom
    FROM mots as Mo
    JOIN langues
    WHERE  Mo.languesId = langueIdIn
END

-------------------------------------------------------------------------------------------------
CREATE SERVICE "recupMot" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_recupMot(langueIdIn = :languesIdIn);
