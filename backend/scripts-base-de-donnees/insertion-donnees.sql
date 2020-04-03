INSERT INTO utilisateurs
(nom, prenom, pseudo, mdp)
VALUES 
('Michotte', 'Martin', 'MM', 'test'),
('Perdaens', 'Martin', 'Martinp95', 'test2'),
('Brogniet', 'Geoffrey', 'G', 'test3');

INSERT INTO langues
(languesId, nom)
VALUES 
('fr', 'français'),
('en', 'anglais'),
('de', 'allemand');

INSERT INTO mots
(languesId, mot)
VALUES 
('fr', 'tortue'),
('en', 'food '),
('de', 'morgen');