
let connexionForm;

document.addEventListener('DOMContentLoaded', function (){
    inscriptionForm = document.getElementById("connexionForm");
    inscriptionForm.addEventListener("submit", submitConnexionForm); 
});                  

function submitConnexionForm(event) {                         
    event.preventDefault();                               
    let form = this;                         
    //ajoutUtilisateur(form.nom.value,form.prenom.value,form.pseudo.value,form.pwd.value);
}