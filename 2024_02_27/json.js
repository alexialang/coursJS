async function rechercheUser(id) {
  //  faire la requete Fetch
  let url = "https://jsonplaceholder.typicode.com/users/" + id;
  const response = await fetch(url);
  const user = await response.json();
  console.log(user);
}

// selectionner le template
let template = document.querySelector("#myTemplate");
// selectionner le tableau
let tbodyElement = document.querySelector("#tbody");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json_resultat) => {
    json_resultat.forEach((valeur) => {
      // cloner le template
      let cloneTemplate = template.content.cloneNode(true);

      // chercher le first child (tr)
      let row = cloneTemplate.firstElementChild;
      // Aller chercher le nom et prenom du user
      // l'url est https://jsonplaceholder.typicode.com/users/valeur/userId

      let user = rechercheUser(valeur.userId);
      // modifier le innerHtml par la fonction replace
      row.innerHTML = row.innerHTML.replace("{{numero}}", valeur.id);
      row.innerHTML = row.innerHTML.replace("{{userid}}", valeur.userId);
      row.innerHTML = row.innerHTML.replace("{{libelle}}", valeur.title);
      row.innerHTML = row.innerHTML.replace("{{termined}}", valeur.completad);
      // ajouter le clone dans le tbody avec le appendChild
      console.log(row.innerHtml);
      tbodyElement.appendChild(row);
    });
  });
