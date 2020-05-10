"use strict";
	
	/*auteur: maxime de cock HE201554 */

/*
 * fonction faisant une requête sur l'api, afin de récupérer le pseudo ainsi que le score du joueur pour préparer la
 * création du tableau classment. Cette fonction fait aussi appel à la fonction creerTable.
 *
 */
	function recupClassement() {
		let xhr = new XMLHttpRequest();

		xhr.open('get', '/classement', true);
		xhr.onload =
			function () {
				let table_jeu = 'table_jeu';
				creerTable(JSON.parse(this.responseText), table_jeu);
			};
		xhr.send();
	}

/*
 * fonction qui va créer une table et l'inscrire dans le code html.
 *
 * @param {object} reponserequete => prends les valeurs nécéssaire à la création de la table dans l'api.
 * @param {string} idBodyTable => l'id de la table que l'on veut réecrire.
 */


function creerTable(reponseRequete, idBodyTable) {

			let table = '<tbody><tr><th> Nom du joueur </th><th> Score du joueur </th></tr>';

			for (let e of reponseRequete) {
				table += '<tr><td>' + e.pseudo + '</td><td>' + e.score + '</td></tr>';
			}
			table += "</tbody>";
			document.getElementById(idBodyTable).innerHTML = table ;
		}

