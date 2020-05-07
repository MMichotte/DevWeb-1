/* Auteurs :

  Martin Michotte
  Brogniet Geoffrey
  Martin Pardeans
*/

// VARIABLES POUR LE JEU
let nombreErreur = 0;
let score=0;
let clavier ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nbreLettretrouvee = 0;
let nbrMot = 1;
let nbrMotMax = 10;

//Objet: contient les données utilsateur après la connexion
let utilisateur;



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
  setNbrMot(nbrMot);
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

      let lettreDansMot = false;
      for (k=0; k < motChoix.length; k++) {

  //      console.log(lettreTrouvee);
        if (motChoix[k] == nomTouche) {
          lettreDansMot = true;
          solution[k] = nomTouche;
          nbreLettretrouvee++;
        }
        else {
          nbreLettretrouvee=0; 
        }
      }
      document.getElementById('solution').innerHTML=arrayVersString(solution);
      document.getElementById('lettre_' + nomTouche.toLowerCase()).style.backgroundColor = '#666666';
      if (nbreLettretrouvee==motChoixLongueur) {
        alert("Vous avez trouvé le mot");
        finDeMot();
      }
    }
    else {
      //console.log(nombreErreur);
      //console.log("saluit");
      nombreErreur++;
      //console.log(nombreErreur);
      document.getElementById('image_pendu').src = "img/img_pendu/" + nombreErreur + ".png";
      document.getElementById('lettre_' + nomTouche.toLowerCase()).style.backgroundColor = '#666666';

      if (nombreErreur == 4) {
        alert("Vous n'avez pas trouvé le mot : " + motChoix);
        finDeMot();
      }
    }

        //console.log(motChoix.indexOf(nomTouche))

  }, false);

function finDeMot() {
  score += 1 - 0.25*nombreErreur;
  setScore(score);

  nombreErreur = 0;
  nbreLettretrouvee=0;
  document.getElementById('image_pendu').src = "img/img_pendu/" + nombreErreur + ".png";
  resetClavier();
  nbrMot++
  if(nbrMot == nbrMotMax+1) {
    document.getElementById("solution").innerHTML = "";

    // Faut afficher fin de Partie
    alert("Fin de partie, merci d'avoir joué")
    nbrMot=1;
    setNbrMot(" ");
    score=0;
  }

  else {
      recupMotAleatoire();
  }
  setScore(score);
}

function resetAll() {
  nombreErreur=0;
  nbreLettretrouvee=0;
  nbrMot=1;
  score=0;
  setScore(0);
  setNbrMot(nbrMot);
  resetClavier();

}

function resetClavier() {
  for (c of clavier) {
    document.getElementById('lettre_' + c.toLowerCase()).style.backgroundColor = "#a0522d";
  }
}

function setScore(s) {
  document.getElementById("score").innerHTML = s + "/" + nbrMotMax;
}
function setNbrMot(m) {
  document.getElementById("nbrMot").innerHTML = m;
}







// GESTION des POPUPS

document.addEventListener('DOMContentLoaded', function (){

    setScore(0);

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
