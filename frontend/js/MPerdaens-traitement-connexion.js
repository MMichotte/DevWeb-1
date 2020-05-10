// auteur : Perdaens Martin


/**
 * Fonction qui permet de s'identifier entant qu'utilisateur via une requête
 * @param {string} pseudoIn => pseudo de passe envoyé à la DB pour comparaison
 * @param {string} mdpIn => mot de passe envoyé à la DB pour comparaison 
 */

/* ***** appel ajax ***** */
function connexionUser(pseudoIn, mdpIn) {
    let xhr = new XMLHttpRequest();                                                             
    xhr.open('get', "/connexion?pseudo=" + pseudoIn + "&mdp="+ mdpIn, true);    
    xhr.onload =                                                                                
        function traiterReponse() { 
            let reponse = JSON.parse(xhr.responseText)[0];
            if(reponse.userId == -1){
                document.querySelector("#pseudoVerification").innerHTML = `<p id="etatPseudo"> Connexion impossible vous avez rentrer de mauvaises informations </p>`;
                document.getElementById('etatPseudo').style.color = 'red';
            }
            else{
                utilisateur = reponse;
                document.getElementById("li_dec").style.display = "table-cell";
                document.getElementById("li_con").style.display = "none";
                document.getElementById("li_ins").style.display = "none";
                document.getElementById("bonjourUser").innerHTML = "Bonjour " + utilisateur.prenom +" !";
                closPopUps(); 
            }
        };
    xhr.send();
};



