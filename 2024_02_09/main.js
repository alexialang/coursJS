let myButton = document.querySelector("#mon_boutton");

myButton.addEventListener("click", message);

let mon_age = 18;
console.log(mon_age);
console.log(typeof mon_age);
let prenom = "albert";
console.log(prenom);
console.log(typeof prenom);

function message() {
  alert("c'est la pause");
}

// boucle finie en js
// rechercher le paragraphe dont l'id est result

let resultat = document.querySelector("#result");

for (i = 0; 1 < 10; i++) {
  resultat.innerHTML += "<br>" + 1;
}

// boucle while
i = 0;
let i = 0;
while (i < 10) {
  resultat.innerHTML += "<br> while" + i;
  i++;
}

i = 10;
do {
  resultat.innerHTML += "<br> do while" + i;
  i++;
} while (i < 10);
