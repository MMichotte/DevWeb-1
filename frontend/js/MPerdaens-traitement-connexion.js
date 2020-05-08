// auteur : Perdaens Martin

/* ***** appel ajax ***** */
function connexionUser(pseudoIn, mdpIn) {
    let xhr = new XMLHttpRequest();                                                             
    xhr.open('get', "http://localhost:8080/connexion?pseudo=" + pseudoIn + "&mdp="+ mdpIn, true);    
    xhr.onload =                                                                                
        function traiterReponse() { 
            let reponse = JSON.parse(xhr.responseText)[0];
            if(reponse.userId == -1){
                document.querySelector("#pseudoVerification").innerHTML = `<p id="etatPseudo"> Connexion impossible vous avez rentrer de mauvaises informations </p>`;
                document.getElementById('etatPseudo').style.color = 'red';
            }
            else{
                utilisateur = reponse
                //CE COMMENTAIRE DOIT ETRE SUPPRIME
                document.getElementById("li_dec").style.display = "table-cell";
                document.getElementById("li_con").style.display = "none";
                document.getElementById("li_ins").style.display = "none";
                document.getElementById("bonjourUser").innerHTML = "Bonjour " + utilisateur.prenom +" !";
                closPopUps(); 
            }
        };
    xhr.send();
};



