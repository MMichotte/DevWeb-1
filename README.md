# Projet DevWeb : jeu du pendu

localhost:8080/pendu

# Présentation de l'équipe
  Pour la réalisation de ce projet, nous sommes un groupe de 4 personnes :
   - Martin Michotte - HE302955
   - Martin Perdeans - HE303159
   - Geoffrey Brogniet - HE201652
   - Maxime de Cock - HE201554
# Besoin du client

  Nous désirons une page web qui permet de jouer au fameux jeu du Pendu. Le but serait de pouvoir taper via le clavier les lettres du mots, de voir au fur et à mesure des fautes le bonhomme se faire pendre mais aussi d'avoir un classement des joueurs avec les scores.

  Ce qui serait bien aussi est la possibilité de pouvoir rajouter les mots qu'on veut dans la base de donnée, afin que le jeu nous ressemble un peu plus.
# Fonctionnalités principales

    - Une page html comportant un clavier virtuel, un image dynamique et l'appartition du mot qui bien sûr est à découvrir.

    - Le tableau du classement des joueurs.

    - Une page de connexion/d'inscription qui nous permet de jouer et d'enregristrer notre score dans la base de donnée.

# Fonctionnalités supplémentaires

    - Possibilité pour l'utilisateur de rajouter des mots via un fichier csv ou un fichier qui contient une liste de mot.
    - Possibilité de rajouter une langue dans la base de données. 
    - Une page qui permet de rajouter des mots.
    
    
# Implémentation : aprroche technique 

Nous avons divisé notre réalisation en deux grandes catégories, le back-end qui va être la création de la table de données via Sybase mais également les procédures et les services dont notre page Web aura besoin. Et nous aurons la partie front-end qui va être la structure même de la page, les scripts et la mise en forme de notre page Web. 

## Partie back-end 

1. Une base de données qui va enregistrer les mots et les scores. 

2. Un serveur web qui sera capable de nous fournir les pages HTML, JS et CSS, ainsi que de proposer des Web Services

3. Des Web Services (avec les procédures associées) : 

    - Un Web Service capable d'ajouter des utilisateurs dans la base de données via un formulaire
    - Un Web Service capable de récupérer la langue souhaité et donc d'y proposer les mots de la langue choisie ainsi que de récupérer les mots de la langue choisie
    - Un Web Service capable d'ajouter et de récupérer les scores de la table de score ainsi que les nom des joueurs
    - Un Web Service qui va nous permettre de se connecter à la page et nous permettre de jouer au jeu
    
## Partie front-end 

1. Une page Web (HTLM, JS, CSS) permettant d'appeler les webservices et de traiter les réponses, qui propose une interface utilisateur pour :

    - Se connecter ou créer un compte 
    - Taper sur son clavier physique afin de chercher le mot
    - Choisir sa langue pour le jeu
    - Retenir le score de la personne qui joue et l'envoyer via une requête à la base de données
    - Appeler les images de la base de données et les afficher lorsque la personne se trompe de lettre. 
    

# Style de la page voulu :

<img src="frontend/img/styleInterfaceFinale.png" alt="Style de la page"/>

# Tables de la base de données  

<img src="frontend/img/tableImg.png" alt="Image de la table de données" />
                                                                        
## Structure de la Base de Données : 
 Notre base de données composé de 4 tables qui sont liées deux à deux.<br/>
       1. table utilisateurs - cette tabble sert pour stocker différentes informations qu'un joueur fournit <br/>
       2. table classement - cette table permet de sauvegarder le meilleur score d'un joueur<br/>
       3. table mots - cette table contient l'ensemble des mots dans les différentes langues disponible dans le jeux<br/>
       4. table langues - cette table permet d'indiquer la correspondance entre un acronyme et le nom complet de la langue<br/>
       
 1. La **table utilisateurs** est composé de 5 champs: *userId*, *nom*, *prenom*, *pseudo*, *mdp*.
 2. La **table classement** est composé de 2 champs: *userId*, *score*.<br/>
 Ces deux tables sont liées grâce au champ *userId* qui se trouve réspéctivement dans chacune des deux tables (cfr: image).
 3. La **table mots** est composé de 2 champs: *languesId (valeur possible: en, fr, de)*, *mot*.
 4. La **table langues** est composé de 2 champs: *languesId (valeur possible: en, fr, de)*, *nom (valeur possible: anglais, français, allemand)*.<br/>
 Ces deux tables sont liées grâce au champ *languesId* qui se trouve réspéctivement dans chacune des deux tables (cfr: image).
