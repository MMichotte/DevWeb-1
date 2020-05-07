let motChoix;
let solution;
let listeMots;

function getMot(select) {
    resetAll();
    let selectElem = document.getElementById('motLangues');
    let index = selectElem.selectedIndex;



    let url = `http://192.168.0.15:8080/recupMot?`;
    let params = `languesIdIn=${select.options[index].value}`
    let request = url + params;
    let xhr = new XMLHttpRequest();
    console.log(xhr.readyState)
    xhr.open('get',request, true);
      xhr.onload =
        function recupMot() {
             listeMots = JSON.parse(xhr.responseText);
             recupMotAleatoire();
        };
    xhr.send();
    return false;
}


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
