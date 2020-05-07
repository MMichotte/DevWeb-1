/* ***** actions au chargement de la page ***** */
/*document.addEventListener('DOMContentLoaded', initPage);                  
function initPage() {
    let formulaireVendeur = document.getElementById("formulaireconnexion");
    formulaireVendeur.addEventListener("submit", soumettreRequete);        
}


/* ***** actions à la soumission du formulaire ***** */
/*function soumettreRequete(event) {                         
    event.preventDefault();                               

    let formulaire = this;                                
    envoyerRequete(formulaire.username.value, formulaire.password.value);
}*/

/* ***** appel ajax ***** */
function connexionUser(pseudoIn, mdpIn) {
    let xhr = new XMLHttpRequest();                                                             
    xhr.open('get', "http://localhost:8080/connexion?pseudo=" + pseudoIn + "&mdp="+ mdpIn, true);    
    xhr.onload =                                                                                
        function traiterReponse() { 
            let reponse = JSON.parse(xhr.responseText);

            if(reponse.userId == -1){
                document.querySelector("#pseudoVerification").innerHTML = `<p id="etatPseudo"> Connexion impossible vous avez rentrer de mauvaises informations </p>`;
                document.getElementById('etatPseudo').style.color = 'red';
            }
            else{
                utilisateur = reponse
                console.log(utilisateur)
            }
        };
    xhr.send();
};



