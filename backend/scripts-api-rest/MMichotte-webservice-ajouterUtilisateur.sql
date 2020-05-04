/* auteur : Michotte Martin HE302955 */

CREATE PROCEDURE "DBA"."proc_ajouterUtilisateur"(in n varchar(50), in pn varchar(50), in ps varchar(50), in pwd varchar(100))
RESULT ("status" integer, "message" varchar(100))
BEGIN
    call sa_set_http_header('Access-Control-Allow-Origin', '*');

    IF NOT EXISTS (
        SELECT pseudo FROM dba.utilisateurs
        WHERE pseudo LIKE ps
    )
    THEN 
        BEGIN
            INSERT INTO utilisateurs (nom, prenom, pseudo, mdp)
            VALUES (n, pn, ps, pwd);
            SELECT '201', 'utilisateur ajouté';
        END
    ELSE
        BEGIN
            SELECT '400', 'le pseudo existe déjà'; -- normalement ce code est inutile car vérif faite préalablement
        END
    ENDIF
    
END;

CREATE SERVICE "ajouterUtilisateur" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call DBA.proc_ajouterUtilisateur(n = :nom, pn = :prenom, ps = :pseudo, pwd = :mdp);
