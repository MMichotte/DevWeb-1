"use strict";
	
	/*auteur: maxime de cock HE201554 */

	
	let xhr = new XMLHttpRequest();
	
	xhr.open('get', 'classement', true);
	xhr.onload = 
		function(){
		
		creerTable(JSON.parse(this.responseText), 'table_jeu');
		}
	xhr.send();
	
	function creerTable(reponseRequete, idBodyTable){

		let table = '<tbody><tr><th> Nom du joueur </th><th> Score du joueur </th></tr>' ;
		
		for (let e of reponseRequete){
			table += '<tr><td>' + e.pseudo + '</td><td>' + e.score + '</td></tr>';  
		}
		table += "</tbody>"
	}
	
	document.getElementById(idBodyTable).innerHTML = table;
	
	
	