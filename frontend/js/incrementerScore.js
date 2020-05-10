/* auteur: commun */

/* Fonction faisant un appel sur l'api, permet la mise à jour du tableau classement
 *
 *
 * @param {int} id => Représente l'id de l'utilisateur
 * @param {float} score => Représente le score de l'utilisateur
 */

function incrementerScore(id, score){

    let xhr = new XMLHttpRequest();

    xhr.open('get', '/majScore?idin='+id+'&scorein='+ score, true);
		xhr.onload =
			function () {
				console.log('score mis à jour gg bro');
			};
		xhr.send();
}

