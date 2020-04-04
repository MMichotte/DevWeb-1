/* ***** actions au chargement de la page ***** */
document.addEventListener('DOMContentLoaded', initPage);                  
function initPage() {
    let formulaireVendeur = document.getElementById("formulaireconnexion");
    formulaireVendeur.addEventListener("submit", soumettreRequete);        
}


/* ***** actions à la soumission du formulaire ***** */
function soumettreRequete(event) {                         
    event.preventDefault();                               

    let formulaire = this;                                
    envoyerRequete(formulaire.username.value, formulaire.password.value);
}

/* ***** appel ajax ***** */
function envoyerRequete(pseudoIn) {
    let xhr = new XMLHttpRequest();                                                             
    xhr.open('get', "http://localhost:80/connexion?user=" + pseudoIn, true);    
    xhr.onload =                                                                                
        function traiterReponse() { 
            let reponse = JSON.parse(xhr.responseText);
            for (let i of reponse) {
                if(pseudoIn == i.pseudo){
                    var para = '<p id="etatPseudo">'+'Le pseudo existe'+'</p>';
                    var etatPseudo = true;
                    break;
                }
                else{
                    var para = '<p id="etatPseudo">'+'Le pseudo n\'existe pas'+'</p>';
                    var etatPseudo = false;
                }
            };
            document.querySelector("#pseudoVerification").innerHTML = para;
            if(etatPseudo){document.getElementById('etatPseudo').style.color = 'green';}
            else{document.getElementById('etatPseudo').style.color = 'red';
        }
             
        };
    xhr.send();
    return false;                                                                             
}


