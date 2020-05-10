// auteur : Michotte Martin HE302955

/**
 * Fonction faisant appel à l'api afin d'inscrire un nouvel utilisateur
 * dans la DB et traitant la réponse de celle-ci. 
 * 
 * @param {String} nom - le nom du nouvel utilisateur
 * @param {String} prenom - le prenom du nouvel utilisateur
 * @param {String} pseudo - le pseudo du nouvel utilisateur
 * @param {String} mdp - le mot de passe du nouvel utilisateur
 */
function ajoutUtilisateur(nom,prenom,pseudo,mdp){
    xhr = new XMLHttpRequest();
    xhr.open("get",`/ajouterUtilisateur?nom=${nom}&prenom=${prenom}&pseudo=${pseudo}&mdp=${mdp}`,true);
    xhr.onerror = 
        function (){
            console.log("ERROR  --  status: " + this.status + ", readyState: " + this.readyState);
            // TODO AFFICHER MESSAGE D'ERREUR
        };
    xhr.onload =              
        function () {
            let request = JSON.parse(this.responseText)[0];
            if (request.status == 201){
                document.getElementById("pseudoExisteDejaErreur").style.display= "none";
                document.getElementById("submitBtn").style.backgroundColor= "green";
                alert("Profile créé! Connectez-vous pour jouer.")
                closPopUps();
            }
            else if (request.status == 400){
                document.getElementById("pseudoInput").style.color= "red";
                document.getElementById("pseudoExisteDejaErreur").style.display= "block";
            }
        };  
    xhr.send();
}