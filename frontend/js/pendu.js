document.addEventListener('keydown', (event) => {
  const nomTouche = event.key;

  if (nomTouche === 'Control') {
    // Pas d'alerte si seule la touche Control est pressée.
    return;
  }

  if (event.ctrlKey) {
    // Même si event.key n'est pas 'Control' (par ex., 'a' is pressed),
    // event.ctrlKey peut être true si la touche Ctrl est pressée dans le même temps.
    alert(`Combinaison de ctrlKey + ${nomTouche}`);
  } else {
    alert(`Touche pressée ${nomTouche}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const nomTouche = event.key;

  // Dès que l'utilisateur relâche la touche Ctrl, la touche n'est plus active.
  // Aussi event.ctrlKey est false.
  if (nomTouche === 'Control') {
    alert('La touche Control a été relâchée');
  }
}, false);
