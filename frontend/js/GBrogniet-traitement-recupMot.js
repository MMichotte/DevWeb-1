var motChoix;
var solution;
function getMot(select) {

    var selectElem = document.getElementById('motLangues');
    var index = selectElem.selectedIndex;

    function nombreAleatoire(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
    }

    let url = `http://192.168.0.15:8080/recupMot?`;
    let params = `languesIdIn=${select.options[index].value}`
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

            solution=[];

            for (j=0; j < motChoix.length; j++){
              solution.push("_");
            }

            
          //  document.getElementById('motChoix').innerHTML=para;

          recuperer();
        };
    xhr.send();
    return false;
    }
