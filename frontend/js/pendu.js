/* Auteurs :
  Martin Michotte
  Brogniet Geoffrey
  Martin Pardeans
  Maxime De Cock
*/

// VARIABLES POUR LE JEU
let attendreAction = false;
let nombreErreur = 0;
let score=0;
let clavier ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let nbreLettretrouvee = 0;
let nbrMot = 1;
let nbrMotMax = 10;
let lettreTape="";
let isInPopup = false;
let nbrErreurMax = 9;
let nombreDivision = 9;
let nomTouche='';

let utilisateur = null; //Objet: contient les données utilsateur après la connexion

// GESTION DU CLAVIER
function arrayVersString(i){
	let str="";
	for (let a=0; a < i.length; a++) {
		str+=i[a];
		if (a != i.length-1) {
			str+=" ";
		}
	}
	return str;
}

function recuperer() {
  document.getElementById("solution").innerHTML=arrayVersString(solution);
  setNbrMot(nbrMot);
}

document.addEventListener('keydown', (event) => {
   nomTouche = event.key;
   let nomToucheUpper = nomTouche.toUpperCase();
   let lettreOk = clavier.includes(nomToucheUpper);
  if(!isInPopup && !attendreAction && lettreOk){



    /*Partie qui verifie si la lettre s'y trouve*/
    if(motChoix.includes(nomTouche) && !lettreTape.includes(nomTouche)){
      for (k=0; k < motChoix.length; k++) {
        if (motChoix[k] == nomTouche) {
          lettreDansMot = true;
          solution[k] = nomTouche;
          nbreLettretrouvee++;
        }

      }
      document.getElementById('solution').innerHTML=arrayVersString(solution);
      document.getElementById('lettre_' + nomTouche.toLowerCase()).style.backgroundColor = '#666666';
      if (nbreLettretrouvee==motChoixLongueur) {
        //le mot complet à été trouvé !
        document.getElementById('button_cache').style.display='block';
        attendreAction = true;
      }
    }
    else if (!lettreTape.includes(nomTouche)){

      nombreErreur++;
      document.getElementById('image_pendu').src = "img/img_pendu/" + nombreErreur + ".png";
      document.getElementById('lettre_' + nomTouche.toLowerCase()).style.backgroundColor = '#666666';

      if (nombreErreur == nbrErreurMax) {
				document.getElementById('button_cache').style.display='block';
                attendreAction = true;
        //alert("Vous n'avez pas trouvé le mot : " + motChoix);
        //finDeMot();
      }
    }
		lettreTape+=nomTouche;

  }

}, false);



function finDeMot() {
  score += 1 - (nombreErreur/nombreDivision);
  score = parseFloat(score.toFixed(2));
  lettreTape="";
  nombreErreur = 0;
  nbreLettretrouvee=0;
  resetClavier();
  document.getElementById('image_pendu').src = "img/img_pendu/" + nombreErreur + ".png";
  attendreAction = false;
  nbrMot++
  if(nbrMot == nbrMotMax+1) {
    document.getElementById("solution").innerHTML = "";

   incrementerScore(utilisateur.userId, score);
   recupClassement()
    alert("Vous êtes arrivé à la fin de la partie. Votre score est de: " + score);
    nbrMot=1;
    setNbrMot(" ");
    score=0;
  }
  else {
      document.getElementById("button_cache").style.display="none";
      recupMotAleatoire();
  }
  setScore(score);

}

function resetAll() {
  nombreErreur=0;
  nbreLettretrouvee=0;
  nbrMot=1;
  score=0;
  lettreTape="";
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


function deconnexion(){
  resetAll();
  document.getElementById('motLangues').selectedIndex = 0;
  document.getElementById('solution').innerHTML=null;
  utilisateur = null;
  document.getElementById("li_dec").style.display = "none";
  document.getElementById("li_con").style.display = "table-cell";
  document.getElementById("li_ins").style.display = "table-cell";
  document.getElementById("bonjourUser").innerHTML = "";
}


// GESTION des POPUPS

let insModal, insBtn, insClose, conModal, conBtn, conClose

document.addEventListener('DOMContentLoaded', function (){

    setScore(0);
    recupClassement();

    insModal = document.getElementById("inscriptionModal");
    insBtn = document.getElementById("inscriptionBtn");
    insClose = document.getElementById("insClose");

    // When the user clicks on the button, open the modal
    insBtn.onclick = function() {
        insModal.style.display = "block";
        isInPopup = true;
    }

    // When the user clicks on <span> (x), close the modal
    insClose.onclick = function() {
        closPopUps();
    }

    conModal = document.getElementById("connexionModal");
    conBtn = document.getElementById("connexionBtn");
    conClose = document.getElementById("conClose");

    // When the user clicks on the button, open the modal
    conBtn.onclick = function() {
        conModal.style.display = "block";
        isInPopup = true;
    }

    // When the user clicks on <span> (x), close the modal
    conClose.onclick = function() {
        closPopUps();
    }


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == insModal || event.target == conModal) {
          closPopUps();
        }
      }

});

function closPopUps() {
  isInPopup = false;
  insModal.style.display = "none";
  conModal.style.display = "none";
}
