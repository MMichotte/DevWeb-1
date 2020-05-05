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
            para += ' | mot découpé en lettre: '
            for( let i = 0; i < motChoix.length; i++){
                para += `${motChoix[i]}  `
            }
          //  document.getElementById('motChoix').innerHTML=para;

            caractererRepeat = '_ ';
            solution = caractererRepeat.repeat(motChoix.length);
            document.getElementById('solution').innerHTML=solution;
        };
    xhr.send();
    return false;
    }
