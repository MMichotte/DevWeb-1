function startGame(select) {

    var selectElem = document.getElementById('motLangues');
    var index = selectElem.selectedIndex;

    function nombreAleatoire(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    let url = `http://localhost:80/mots?`;
    let params = `langueIdIn=${select.options[index].value}`
    let request = url + params;
    let xhr = new XMLHttpRequest();
    console.log(xhr.readyState)
    xhr.open('get',request, true);
      xhr.onload =
        function () {
            let response = JSON.parse(xhr.responseText);

            nombre = nombreAleatoire(0, response.length);
            para = `<b>Voici le mot qui a été choisis pour le jeux:</b> <i>${response[nombre].mot}</i>`;

            motChoix = response[nombre].mot;
            para += ' | mot découpé en lettre: '
            for( let i = 0; i < motChoix.length; i++){
                para += `${motChoix[i]}  `
            }
            document.getElementById('motChoix').innerHTML=para;

            caractererRepeat = '_ ';
            solution = caractererRepeat.repeat(motChoix.length);
            document.getElementById('solution').innerHTML=solution;



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

        };
    xhr.send();
    return false;
    }



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