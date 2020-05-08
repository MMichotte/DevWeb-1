
let connexionForm;

document.addEventListener('DOMContentLoaded', function (){
    inscriptionForm = document.getElementById("connexionForm");
    inscriptionForm.addEventListener("submit", submitConnexionForm); 
});                  

function submitConnexionForm(event) {                         
    event.preventDefault();                               
    let form = this;                         
    connexionUser(form.username.value, form.password.value);
}