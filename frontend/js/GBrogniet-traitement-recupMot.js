/* Auteur :

    Brogniet Geoffrey

*/

let motChoix;
let solution;
let listeMots;

/**
 * Fonction faisant appel à l'api afin d'aller chercher la langue voulu
 * dans la DB et traitant la réponse de celle-ci.
 * Fonction qui permet de jouer ou non si on est connecté ou pas.
 *
 * @param {String} languesIdIn - le choix de langues du jeu
 * @return {array} la liste de mots de la langue choisie
 */

function getMot(select) {
    let selectElem = document.getElementById('motLangues');
    let index = selectElem.selectedIndex;

    if(utilisateur == null){
      alert("Vous devez être connecté pour jouer!");
      selectElem.selectedIndex = 0;
    }
    else{
      resetAll();


      let params = `languesIdIn=${select.options[index].value}`
      let xhr = new XMLHttpRequest();
      xhr.open('get','/recupMot?'+params, true)

      xhr.open('get',request, true);
        xhr.onload =
          function recupMot() {;
              listeMots = JSON.parse(xhr.responseText);
              recupMotAleatoire();
          };
      xhr.send();
    }
    return false;
}

/**
 * Fonction faisant appel à la fonction getMot() afin d'aller chercher
 * aléatoirement un mot dans la liste récupérée par rapport au nombre
 * aléatoire créé et par rapport au temps de réponse de la requête.
 *
 * Cette fonction va faire appel à la fonction récupérer() qui se trouve dans
 *  pendu.js
 *
 */

function recupMotAleatoire() {
  function nombreAleatoire(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min +1)) + min;
  }

  nombre = nombreAleatoire(0, listeMots.length);

  para = `<b>Voici le mot qui a été choisis pour le jeux:</b> <i>${listeMots[nombre].mot}</i>`;


  motChoix = listeMots[nombre].mot;

  motChoixLongueur = motChoix.length;

  solution=[];

  for (j=0; j < motChoix.length; j++){
    solution.push("_");
  }


//  document.getElementById('motChoix').innerHTML=para;

recuperer();

}
