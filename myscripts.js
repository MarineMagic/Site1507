box = document.getElementById('test');

box.style.animation = 'arcenciel 2s forwards';

box.addEventListener('animationend', () => {
  box.style.animation = 'arcencielbis 2s infinite';
});

let savedValue = null;
voirNom()
function voirNom() {
  savedValue = localStorage.getItem('myVariable');
  texteElement = document.getElementById("texte");  
  if (savedValue) {
    texteElement.textContent = "Salut " + savedValue + "!";
  }
}
  //localStorage.removeItem('myVariable'); //effacer valeure stockée

function sauverInput1() {
  inputElement = document.getElementById("input1");
  localStorage.setItem('myVariable', inputElement.value);
  voirNom();
}

//localStorage.setItem('myVariable', inputElement.value); //stock une info
//localStorage.getItem('myVariable'); //lit une info stockée
//localStorage.removeItem('myVariable'); //effacer valeure stockée