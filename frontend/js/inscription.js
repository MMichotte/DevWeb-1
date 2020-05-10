let inscriptionForm;

document.addEventListener('DOMContentLoaded', function (){
    inscriptionForm = document.getElementById("InscriptionForm");
    inscriptionForm.addEventListener("submit", submitInscriptionForm); 
});                  

/**
 * Fonction appelée lorsque le formulaire d'inscription est soumis.
 * Cette fonction récupère la valeur des champs du formulaire et les 
 * transmet en paramètre à la fonction traitant la requête api.
 * 
 * @param {*} event Évènement de soumission du formulaire. 
 */
function submitInscriptionForm(event) {                         
    event.preventDefault();                               
    let form = this;                         
    ajoutUtilisateur(form.nom.value,form.prenom.value,form.pseudo.value,form.pwd.value);
}

