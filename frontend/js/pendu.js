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
// Geof
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

//Geof
function recuperer() {
  document.getElementById("solution").innerHTML=arrayVersString(solution);
  setNbrMot(nbrMot);
}

// Geof
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
        document.getElementById('solution').innerHTML = motChoix;
        document.getElementById('solution').style.color = 'green';
        document.getElementById('button_cache').style.display='block';
        attendreAction = true;
      }
    }
    else if (!lettreTape.includes(nomTouche)){

      nombreErreur++;
      document.getElementById('image_pendu').src = "img/img_pendu/" + nombreErreur + ".png";
      document.getElementById('lettre_' + nomTouche.toLowerCase()).style.backgroundColor = '#666666';

      if (nombreErreur == nbrErreurMax) {
				document.getElementById('solution').innerHTML = motChoix;
				document.getElementById('solution').style.color = 'red';
				document.getElementById('button_cache').style.display='block';
                attendreAction = true;
                //alert("Vous n'avez pas trouvé le mot : " + motChoix);
                //finDeMot();
      }
    }
		lettreTape+=nomTouche;

  }

}, false);


/**
 * Fonction utilitaire permettant de rafraîchir les données 
 * lors d'un changement de mots. 
 * 
 */
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
    incrementerScore(utilisateur.userId, score);
    recupClassement()
    document.getElementById("solution").innerHTML = "";
    alert("Vous êtes arrivé à la fin de la partie. Votre score est de: " + score);
    score=0;
    nbrMot=1;
    setNbrMot("");
  }
  else {
      document.getElementById("button_cache").style.display="none";
      recupMotAleatoire();
  }

  setScore(score);
  document.getElementById('solution').style.color = 'black';
}


// Maxime
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
/**
 * Fonction qui permet de remettre la couleur par défaut des touches du clavier 
 */
function resetClavier() {
  for (c of clavier) {
    document.getElementById('lettre_' + c.toLowerCase()).style.backgroundColor = "#a0522d";
  }
}

/**
 * Cette fonction permet d'afficher à la fin de chaque mot le score actuel du joueur 
 * @param {double} s => fait référence au score du joueur après chaque mot
 */
function setScore(s) {
  document.getElementById("score").innerHTML = s + "/" + nbrMotMax;
}

/**
 * Fonction qui permet d'indiquer au joueur à quel mot il se trouve dans la liste
 * @param {int} m => fait référence au numéro du mot actuel à trouvé
 */
function setNbrMot(m) {
  document.getElementById("nbrMot").innerHTML = m;
}


/**
 * Fonction gérant la déconnexion d'un utilisateur.
 */
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

    /**
     * Fonction faisant apparaître le popup d'inscription 
     * lors de l'appui sur le bouton "inscription".
     */
    insBtn.onclick = function() {
        insModal.style.display = "block";
        isInPopup = true;
    }

    /**
     * Fonction faisant disparaître le popup d'inscription 
     * lors de l'appui sur le "X".
     */
    insClose.onclick = function() {
        closPopUps();
    }

    conModal = document.getElementById("connexionModal");
    conBtn = document.getElementById("connexionBtn");
    conClose = document.getElementById("conClose");

    /**
     * Fonction faisant apparaître le popup de connexion 
     * lors de l'appui sur le bouton "connexion".
     */
    conBtn.onclick = function() {
        conModal.style.display = "block";
        isInPopup = true;
    }

    /**
     * Fonction faisant disparaître le popup de connexion 
     * lors de l'appui sur le "X".
     */
    conClose.onclick = function() {
        closPopUps();
    }


    /**
     * Fonction faisant disparaître tous les popups
     * ouvert lors d'un click en dehors d'un popup.
     */
    window.onclick = function(event) {
        if (event.target == insModal || event.target == conModal) {
          closPopUps();
        }
      }

});

/**
 * Fonction faisant disparaître tous les popups
 */
function closPopUps() {
  isInPopup = false;
  insModal.style.display = "none";
  conModal.style.display = "none";
}
