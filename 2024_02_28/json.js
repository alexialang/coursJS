let templateElement = document.querySelector("#myTemplate");
let tbodyElement = document.querySelector("#tbody");

fetch("http://coursjs.local/2024_28_02/json.client.php")
  .then((resultat) => resultat.json())
  .then(async (json_resultat) => {
    for (const valeur of json_resultat) {
      // cloner le template
      let cloneTemplate = templateElement.content.cloneNode(true);
      // chercher le firstchild (TR)
      let ligne = cloneTemplate.firstElementChild;
      // modifier le innerHTML  par la fonction replace
      // aller chercher le nom et prenom du user
      // l'url est https://jsonplaceholder.typicode.com/user/valeur.userId
      ligne.innerHTML = ligne.innerHTML.replace(
        "{{userid}}",
        valeur.num_client
      );
      ligne.innerHTML = ligne.innerHTML.replace("{{nom}}", valeur.nom_client);
      ligne.innerHTML = ligne.innerHTML.replace(
        "{{prenom}}",
        valeur.prenom_client
      );
      ligne.innerHTML = ligne.innerHTML.replace(
        "{{ville}}",
        valeur.ville_nom_reel
      );
      tbodyElement.appendChild(ligne);
    }
  });
