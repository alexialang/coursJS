let monChoix = document.querySelector("#choix");

monChoix.addEventListener("input", function (e) {
  fetch("select.php?debutdunom=" + this.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      let maliste = document.querySelector("#liste");
      maliste.innerHTML = "";
      json.forEach((element) => {
        let newOption = document.createElement("option");
        newOption.innerText = element.nom_client + " " + element.prenom_client;
        maliste.appendChild(newOption);
      });
    });
});
