// GESTION DU CLAVIER


function arrayVersString(i){
	let str="";
	for (let a=0; a < i.length; a++) {
    console.log(i[a]);
		str+=i[a];
		if (a != i.length-1) {
			str+=" ";
		}
	}
  console.log(str);
  console.log(i);
	return str;
}

function recuperer() {
  document.getElementById("solution").innerHTML=arrayVersString(solution);

}

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

      for (k=0; k < motChoix.length; k++) {
        console.log(lettreTrouvee);
        if (motChoix[k] == nomTouche) {

          solution[k] = nomTouche;
          console.log("lettreTrouvee2");
        }
      }
      /*  Test pour les erreurs
      if (nomTouche != solution[k]) {
        let nombreErreur=0;
         nombreErreur += 1;
         switch (nombreErreur) {
           case 1 :
           document.getElementById("image_pendu").src = "img_pendu/pendu1.png";
           case 2 :
           document.getElementById("image_pendu").src = "img_pendu/pendu2.png";
           case 3 :
           document.getElementById("image_pendu").src = "img_pendu/pendu3.png";
           case 4 :
           document.getElementById("image_pendu").src = "img_pendu/pendu4.png";
         }
         */


      }


        //console.log(motChoix.indexOf(nomTouche))

        document.getElementById('solution').innerHTML=arrayVersString(solution);
        document.getElementById('lettre_' + nomTouche.toLowerCase()).style.backgroundColor = '#666666';
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
