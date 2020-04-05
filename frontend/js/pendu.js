function init_calques()
{
var parent = document.getElementById('clavier');
var enfants = parent.getElementsByTagName('div');



function clavier(event)
{
var indice=0;
var la_lettre='';
var trouve = false;

if(fin==true)
return;

var touche = window.event ? evenement.keyCode : evenement.which;
touche = String.fromCharCode(touche).substr(0,1);
//alert(touche);

if(touche==' ')
{
la_touche = ' ';
return;
}
if(lettres_ok.indexOf(touche)==-1)
return;

document.getElementById('lettre_' + touche.toLowerCase()).style.backgroundColor = '#666666';

for (indice=0; indice<=mem_mot.length-1; indice++)
{
la_lettre = mem_mot.substr(indice,1);
if(la_lettre==touche)
{
trouve = true;
le_mot = le_mot.substr(0,indice) + la_lettre + le_mot.substr(indice + 1);
document.getElementById('leMot').innerHTML = le_mot;
}
}
if(trouve == true)
{
if(le_mot == mem_mot)
{
nb_passe++;
if(nb_passe==10)
{
document.getElementById('leScore').innerHTML = 'Votre score :<strong>' + (le_score-nb_erreurs/4) + ' / 10</strong> - Mots restants : <strong>' + (10 - nb_passe) + '</strong>- <strong>Victoire !</strong>';
fin = true;
}
else
{
window.setTimeout(function attendre(){ suivant(); }, 1000);
}
}
}
else
{
nb_erreurs++;
document.getElementById('lePendu').src = 'img_pendu/pendu' + nb_erreurs + '.png';
if(nb_erreurs==4)
{
nb_passe++;
if(nb_passe==10)
fin = true
window.setTimeout(function attendre(){ suivant(); }, 1000);
}
}
}
