function recupMot(select) {

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
