// GESTION DU CLAVIER

document.addEventListener('keydown', (event) => {
    const nomTouche = event.key;
    /*Partie qui verifie si la lettre s'y trouve*/
    if(motChoix.includes(nomTouche)){
        lettreTrouvee = true;
    }
    else{
        lettreTrouvee = false;
    }


    /*Partie qui remplace le _ par la/les lettre(s)*/
    if(lettreTrouvee){
        //console.log(motChoix.indexOf(nomTouche))
        remplacement = solution.replace(solution[0], nomTouche);
        document.getElementById('solution').innerHTML= remplacement;
        }
    else{
    }
  }, false);

// GESTION des POPUPS

document.addEventListener('DOMContentLoaded', function (){
    let insModal = document.getElementById("inscriptionModal");
    let insBtn = document.getElementById("inscriptionBtn");
    let insClose = document.getElementById("insClose");

    // When the user clicks on the button, open the modal
    insBtn.onclick = function() {
        insModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    insClose.onclick = function() {
        insModal.style.display = "none";
    }

    let conModal = document.getElementById("connexionModal");
    let conBtn = document.getElementById("connexionBtn");
    let conClose = document.getElementById("conClose");

    // When the user clicks on the button, open the modal
    conBtn.onclick = function() {
        conModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    conClose.onclick = function() {
        conModal.style.display = "none";
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == insModal) {
          insModal.style.display = "none";
        }
        if (event.target == conModal) {
          conModal.style.display = "none";
        }
      }

});
