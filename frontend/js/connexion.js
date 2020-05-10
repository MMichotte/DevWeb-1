
let connexionForm;

document.addEventListener('DOMContentLoaded', function (){
    inscriptionForm = document.getElementById("connexionForm");
    inscriptionForm.addEventListener("submit", submitConnexionForm); 
});                  

/**
 * 
 * @param {string} event => permet de récuperer les éléments des champs cible 
 */
function submitConnexionForm(event) {                         
    event.preventDefault();                               
    let form = this;                         
    connexionUser(form.username.value, form.password.value);
}