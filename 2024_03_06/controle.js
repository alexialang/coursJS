// controle de l'email et du mot de passe

let user_mail = document.querySelector("#user_mail");

// ajouter l'écoute de l'evenement
user_mail.addEventListener("blur", function (e) {
  fetch("json_testuser.php?user_mail=" + this.value)
    .then(function (response) {
      return response.json();
    })
    .then(function (resultat) {
      console.log(resultat);
      if (resultat[0].nb == 1) {
        // email existe dans la bdd
        document.querySelector("#alerte").innerHTML = "cet email existe déja";
        // remettre le focus sur le champ email
        user_mail.focus();
      } else {
        document.querySelector("#alerte").innerHTML = "";
      }
    });
});

//  controler les mdp
//  le controle se fera sur le click du boutton submit
let btn_submit = document.querySelector("#valider");
// ajouter l'écoute de l'ev
btn_submit.addEventListener("click", function (e) {
  e.preventDefault();
  // controler que les mdp sont identiques
  let pwd1 = document.querySelector("#pwd1");
  let pwd2 = document.querySelector("#pwd2");
  if (pwd1.value === pwd2.value) {
    console.log("identique");
    // se débrouiller pour valider le formulaire
    document.querySelector("#formulaire").submit();
  } else {
    console.log("different");
    // afficher un petit message
    let alerte2 = document.querySelector("#alerte2");
    alerte2.innerHTML = "vos mot de passe sont différents";
    // document.querySelector("#alerte2").innerHtml = "vos mots de passe sont differents"
  }
});
