// let mainElement = document.querySelector("#main");
// let client = document.querySelector("#client");
// let produit = document.querySelector("#produit");

// // CLIENT

// client.addEventListener("click", function () {
//   fetch("http://coursjs.local/2024_01_03/json.client.php")
//     .then((resultat) => resultat.json())
//     .then(async (json_resultat) => {
//       // Supprimer les anciens tableaux s'il y en a
//       while (mainElement.firstChild) {
//         mainElement.removeChild(mainElement.firstChild);
//       }

//       // Créer un nouveau tableau
//       let newTable = document.createElement("table");
//       newTable.classList.add("client-table");

//       // Créer l'en-tête du tableau
//       let headerRow = document.createElement("tr");
//       headerRow.innerHTML = `
//            <th>Numéro client</th>
//            <th>Nom</th>
//            <th>Prénom</th>
//            <th>Ville</th>
//          `;
//       newTable.appendChild(headerRow);

//       for (const valeur of json_resultat) {
//         let ligne = document.createElement("tr");
//         ligne.innerHTML = `
//           <td>${valeur.num_client}</td>
//           <td>${valeur.nom_client}</td>
//           <td>${valeur.prenom_client}</td>
//           <td>${valeur.ville_nom_reel}</td>
//         `;
//         newTable.appendChild(ligne);
//       }

//       // Ajouter le nouveau tableau à l'élément principal
//       mainElement.appendChild(newTable);
//     });
// });

// // PRODUIT

// produit.addEventListener("click", function () {
//   fetch("http://coursjs.local/2024_01_03/json.article.php")
//     .then((resultat) => resultat.json())
//     .then(async (json_resultat) => {
//       // Supprimer les anciens tableaux s'il y en a
//       while (mainElement.firstChild) {
//         mainElement.removeChild(mainElement.firstChild);
//       }

//       // Créer un nouveau tableau
//       let newTable = document.createElement("table");
//       newTable.classList.add("produit-table");

//       // Créer l'en-tête du tableau
//       let headerRow = document.createElement("tr");
//       headerRow.innerHTML = `
//          <th>Numéro Article</th>
//          <th>Description</th>
//          <th>Quantite</th>
//          <th>Prix ht</th>
//        `;
//       newTable.appendChild(headerRow);

//       for (const valeur of json_resultat) {
//         let ligne = document.createElement("tr");
//         ligne.innerHTML = `
//           <td>${valeur.num_article}</td>
//           <td>${valeur.description_article}</td>
//           <td>${valeur.quantite_stock}</td>
//           <td>${valeur.prix_ht}</td>
//         `;
//         newTable.appendChild(ligne);
//       }

//       // Ajouter le nouveau tableau à l'élément principal
//       mainElement.appendChild(newTable);
//     });
// });

let mainElement = document.querySelector("#main");
let client = document.querySelector("#client");
let produit = document.querySelector("#produit");

client.addEventListener("click", function () {
  fetch("http://coursjs.local/2024_01_03/json.client.php")
    .then((resultat) => resultat.json())
    .then(async (json_resultat) => {
      // Créer un nouveau tableau
      let newTable = document.createElement("table");
      newTable.classList.add("client-table");

      // Créer le thead et les en-têtes de colonne
      let thead = document.createElement("thead");
      let headerRow = document.createElement("tr");
      headerRow.innerHTML = `
         <th>Id</th>
         <th>Nom</th>
         <th>Prénom</th>
         <th>ville</th>
       `;
      thead.appendChild(headerRow);

      // Ajouter le thead au tableau
      newTable.appendChild(thead);

      // Récupérer le modèle de tableau client depuis le HTML
      let template = document.querySelector("#tableClient");

      // Remplir le tableau avec les données
      for (const valeur of json_resultat) {
        // Cloner le modèle de tableau
        let cloneTemplate = template.content.cloneNode(true);

        // Remplacer les marqueurs de données par les valeurs réelles
        let ligne = cloneTemplate.firstElementChild;

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

        // Ajouter la ligne clonée au nouveau tableau
        newTable.appendChild(cloneTemplate);
      }

      // Supprimer les anciens tableaux s'il y en a
      while (mainElement.firstChild) {
        mainElement.removeChild(mainElement.firstChild);
      }

      // Ajouter le nouveau tableau à l'élément principal
      mainElement.appendChild(newTable);
    });
});

produit.addEventListener("click", function () {
  fetch("http://coursjs.local/2024_01_03/json.article.php")
    .then((resultat) => resultat.json())
    .then(async (json_resultat) => {
      // Créer un nouveau tableau
      let newTable = document.createElement("table");
      newTable.classList.add("produit-table");

      // Créer le thead et les en-têtes de colonne
      let thead = document.createElement("thead");
      let headerRow = document.createElement("tr");
      headerRow.innerHTML = `
          <th>Id</th>
          <th>description</th>
          <th>quantité</th>
          <th>price</th>
        `;
      thead.appendChild(headerRow);

      // Ajouter le thead au tableau
      newTable.appendChild(thead);

      // Récupérer le modèle de tableau produit depuis le HTML
      let template = document.querySelector("#tableProduit");

      // Remplir le tableau avec les données
      for (const valeur of json_resultat) {
        // Cloner le modèle de tableau
        let cloneTemplate = template.content.cloneNode(true);

        let ligne = cloneTemplate.firstElementChild;

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
        // Ajouter la ligne clonée au nouveau tableau
        newTable.appendChild(cloneTemplate);
      }

      // Supprimer les anciens tableaux s'il y en a
      while (mainElement.firstChild) {
        mainElement.removeChild(mainElement.firstChild);
      }

      // Ajouter le nouveau tableau à l'élément principal
      mainElement.appendChild(newTable);
    });
});
