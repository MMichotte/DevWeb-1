function ajoutClassement(userId, score){
    xhr = new XMLHttpRequest();
    xhr.open("get",`http://127.0.0.1:8080/addClassement?userId=${pseudo}&score=${score}`,true);
    xhr.onerror =
        function (){
            console.log("status: " + this.status + ", readyState: " + this.readyState);
        };
    xhr.onload =
        function () {
            let request = JSON.parse(this.responseText)[0];
            if (request.status == 201){
                document.getElementById("ajoutScore").style.backgroundColor= "green";
                window.location.replace("http://127.0.0.1:8080/pendu");
            }
            else if (request.status == 400){
                document.getElementById("ajoutScore").style.backgroundColor= "red";
                // TODO AFFICHER MESSAGE D'ERREUR
            }
        };
    xhr.send();
}

function ajoutScore {

}
