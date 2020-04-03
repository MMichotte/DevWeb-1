
let signUpForm;

document.addEventListener('DOMContentLoaded', function (){
    signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", submitSignUpForm); 
});                  

function submitSignUpForm(event) {                         
    event.preventDefault();                               
    let form = this;                         
    ajoutUtilisateur(form.name.value,form.lastName.value,form.pseudo.value,form.password.value);
}