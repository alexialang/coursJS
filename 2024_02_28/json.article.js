let templateElement = document.querySelector("#myTemplate");
let tbodyElement = document.querySelector("#tbody");

fetch("http://coursjs.local/2024_28_02/json.article.php")
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
        "{{numarticle}}",
        valeur.num_article
      );
      ligne.innerHTML = ligne.innerHTML.replace(
        "{{description}}",
        valeur.description_article
      );
      ligne.innerHTML = ligne.innerHTML.replace(
        "{{quantite}}",
        valeur.quantite_stock
      );
      ligne.innerHTML = ligne.innerHTML.replace("{{price}}", valeur.prix_ht);
      // ajouter le clone dans le TBODY avec appendChild
      tbodyElement.appendChild(ligne);
    }
  });
