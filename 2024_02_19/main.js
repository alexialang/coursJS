// Fonction anonyme
let alerte = function () {
  alert("vous êtes dans une fonction anonyme");
};

alerte();

let mesParagraphes = document.querySelectorAll("p");

for (i = 0; i < mesParagraphes.length; i++) {
  console.log(mesParagraphes[i].id);
}

mesParagraphes.forEach(function (paragraphe, index) {
  console.log(index + "==>" + paragraphe.id);
  paragraphe.addEventListener("click", function () {
    // ensemble du core à lancer lors de la detection du click
    // if (paragraphe.classList.contains("standard")) {
    //   paragraphe.classList.remove("standard");
    //   paragraphe.classList.add("click");
    // } else {
    //   paragraphe.classList.remove("click");
    //   paragraphe.classList.add("standard");
    // }
    paragraphe.classList.toggle("standard");
    paragraphe.classList.toggle("click");
  });
});

function calcul(a, b) {
  let somme = a + b;

  let multiplication = a * b;

  let soustraction = a - b;
  return somme, multiplication, soustraction;
}

let resultatcalcul = calcul(10, 5);
