// let x = parseInt(prompt("Saisir la valeur de x"));
// let y = parseInt(prompt("Saisir la valeur de y"));

// if (x > y) {
//   console.log("x est supérieur a y");
// } else {
//   if (x < y) {
//     console.log("x est inférieur a y");
//   } else {
//     console.log("x est égal a y");
//   }
// }

// // else if

// if (x > y) {
//   console.log("x est supérieur a y");
// } else if (x < y) {
//   console.log("x est inférieur a y");
// } else {
//   console.log("x est égal à y");
// }
// // &&

// if (x > 0 && x < 30) {
//   console.log("x est compris entre 0 et 30");
// }

// // Opérateur ternaire

// x > y ? console.log("x est supérieur a y") : console.log("x est inférieur a y");

// let vitesse = parseInt(prompt("saisir votre vitesse"));

// switch (vitesse) {
//   case 90:
//     console.log("sur une nationnal c'est pas mal");
//     break;
//   case 110:
//     console.log("J'espère que vous êtes sur une voie rapide");
//     break;
//   case 130:
//     console.log("vive l'A31");
//     break;
//   case 150:
//     console.log("gutten tag");
//     break;
//   default:
//     console.log("Je ne connais pas cette limite");
// }

// Fonction

// function mafonction(nombre) {
//   let somme = 0;
//   for (i = 0; i <= 10; i++) {
//     console.log(i * nombre);
//     somme += i * nombre;
//   }
//   return somme;
// }

// let uneVariableGloabale = "je suis globale";
// let resultat = mafonction(5);
// console.log(somme);

// demander un chiffre a l'utilisateur
let number = prompt("Saisir un chiffre");

// transformer le chiffre en tableau
let myFunc = (num) => Number(num);

function tab() {
  return Array.from(String(number), myFunc);
}
console.log(tab(number));

function smallestNumber() {
  smallest = 0;
  let num = tab(number);
  num.sort((a, b) => a - b);
  let smallest = num.join("");
  return smaller;
}
console.log(smallestNumber);

console.log(smallestNumber(smaller));

function biggestNumber(number) {
  for (i = 0; i < number.length; i++) {
    if (bigger < i) {
      bigger = i;
    }
  }
}
