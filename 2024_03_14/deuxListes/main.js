let monChoix = document.querySelector("#choix");

monChoix.addEventListener("input", function (e) {
  fetch("listes.php?debutdepartement=" + this.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      let maliste = document.querySelector("#liste1");
      maliste.innerHTML = "";
      json.forEach((element) => {
        let newOption = document.createElement("option");
        newOption.innerText = element.departement_nom;
        maliste.appendChild(newOption);
      });
    });
});

let selection = document.querySelector("#liste1");

selection.addEventListener("click", function (e) {
  fetch("listes2.php?departement=" + this.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      let maliste2 = document.querySelector("#liste2");
      maliste2.innerHTML = "";
      json.forEach((element) => {
        let newOption2 = document.createElement("option");
        newOption2.innerText = element.ville_nom;
        maliste2.appendChild(newOption2);
      });
    });
});
