"use strict";
	
	/*auteur: maxime de cock HE201554 */

	
	
	
	let xhr = new XMLHttpRequest();
	
	xhr.open('get', 'classement', true);
	xhr.onload = 
		function(){
		
		makeTable(JSON.parse(this.responseText), 'Scores');
		}
	xhr.send();
	
	function makeTable(reponseRequete, idBodyTable){
	
		let lignes = '<tr><th>Pseudo</th><th>Score</th></tr>';
		for (let e of reponseRequete){
			lignes += '<tr><td>' + e.pseudo + '</td><td>' + e.score + '</td></tr>\n';  
		}
	}
	document.getElementById(idBodyTable).innerHTML = lignes;