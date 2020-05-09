function incrementerScore(id, score){

    let xhr = new XMLHttpRequest();

    xhr.open('get', 'http://localhost:8080/majScore?idin='+id+'&scorein='+ score, true);
		xhr.onload =
			function () {
				console.log('score mis à jour gg bro');
			};
		xhr.send();
}

