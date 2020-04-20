// auteur : Michotte Martin HE302955

function ajoutUtilisateur(nom,prenom,pseudo,mdp){
    xhr = new XMLHttpRequest();
    xhr.open("get",`http://127.0.0.1:8080/addUser?nom=${nom}&prenom=${prenom}&pseudo=${pseudo}&mdp=${mdp}`,true);
    xhr.onerror = 
        function (){
            console.log("ERROR  --  status: " + this.status + ", readyState: " + this.readyState);
            // TODO AFFICHER MESSAGE D'ERREUR
        };
    xhr.onload =              
        function () {
            let request = JSON.parse(this.responseText)[0];
            if (request.status == 201){
                document.getElementById("pseudoAlreadyExistsError").style.display= "none";
                document.getElementById("submitBtn").style.backgroundColor= "green";
                window.location.assign("http://127.0.0.1:8080/pendu");
            }
            else if (request.status == 400){
                document.getElementById("pseudoInput").style.color= "red";
                document.getElementById("pseudoAlreadyExistsError").style.display= "block";
            }
        };  
    xhr.send();
}