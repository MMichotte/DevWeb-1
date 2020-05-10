
let connexionForm;

document.addEventListener('DOMContentLoaded', function (){
    inscriptionForm = document.getElementById("connexionForm");
    inscriptionForm.addEventListener("submit", submitConnexionForm); 
});                  

/**
 * Fonction qui permet de récupérer la valeur des champs "username" et "password" du formulaire de connexion
 * @param {string} event => permet de récuperer les éléments des champs cible 
 */
function submitConnexionForm(event) {                         
    event.preventDefault();                               
    let form = this;                         
    connexionUser(form.username.value, form.password.value);
}