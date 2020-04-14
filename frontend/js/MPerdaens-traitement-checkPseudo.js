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
    xhr.open('get', "http://localhost:8080/proc_checkPseudo?user=" + pseudoIn, true);    
    xhr.onload =                                                                                
        function traiterReponse() { 
            let reponse = JSON.parse(xhr.responseText);
            let tabMembre = [];
            for (let i of reponse) {
                tabMembre.push(i.pseudo);
            }
                if(tabMembre.includes(pseudoIn)){
                    var etatPseudo = true;
                    nompseudo = pseudoIn;
                }
                else{
                    var para = '<p id="etatPseudo">'+'Le pseudo n\'existe pas'+'</p>';
                    var etatPseudo = false;
                }
            ;
            if(etatPseudo){
                var para2 = `<p> Bievenue: ${nompseudo} <br>
                pour lancer le jeux <a href="#">cliquez ici</a></p>`
                document.querySelector(".login-form").innerHTML = para2;
            }
            else{
                document.querySelector("#pseudoVerification").innerHTML = para;
                document.getElementById('etatPseudo').style.color = 'red';} 
        };
    xhr.send();
    return false;                                                                             
}


