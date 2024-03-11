// rajouter sur les tyoes natifs nos propres méthodes
String.prototype.bonjour = function () {
  console.log("coucou loulou");
};

class media {
  constructor(titre, genre, realisateur) {
    this.titre = titre;
    this.genre = genre;
    this.realisateur = realisateur;
  }
  play() {
    console.log("cette oeuvre de " + this.genre);
    console.log("se nomme " + this.titre);
    console.log(", et est réalisé par " + this.realisateur);
  }
}
//  Héritage
class film extends media {
  constructor(titre, genre, realisateur, annee, duree) {
    super(titre, genre, realisateur);
    this.annee = annee;
    this.duree = duree;
  }
  playfilm() {
    this.play();
    console.log(
      " il est sortie en " + this.annee + " et d'une durée de " + this.duree
    );
  }
}

class serie extends media {
  constructor(titre, genre, realisateur, numerosaison, nbepisode) {
    super(titre, genre, realisateur);
    this.numerosaison = numerosaison;
    this.nbepisode = nbepisode;
  }
}

const dune = new film("dune", "sf", "villeneuve", 2024, 120);

// declarer un objet

let personne = {
  // propriété
  nom: "dupont",
  prenom: "albert",
  preference: ["html", "css"],
  // sous espace de nom
  adresse: {
    rue: "12 rue des vosges",
    ville: "metz",
    cp: "57000",
    complement: "",
  },
  // methode
  bio: function () {
    alert(this.nom + " " + this.prenom + " aime :" + this.preference[1]);
  },
};

// permet de creer une classe d'objet
class individu {
  constructor(nom, prenom) {
    this.nom = nom;
    this.prenom = prenom;
  }

  bonjour() {
    console.log("bonjour, je m'appelle " + this.nom + " " + this.prenom);
  }
}
const albert = new individu("Muda", "Albert");
