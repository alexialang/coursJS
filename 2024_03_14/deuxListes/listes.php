<?php

try {
  // Parametre de la BDD
  $host = 'localhost';
  $user = 'root';
  $password = '';
  $dbName = 'france';


  // Connexion à la BDD
  $dbh = new PDO("mysql:host=$host;dbname=$dbName", $user, $password); // PDO : Bibliothèque d'objet pour ce connecter a une BDD

  // Récuperer les champs du formulaire et faire un INSERT INTO dans la BDD
  $resultat = $dbh->prepare("SELECT * FROM departement WHERE departement_nom LIKE :debutdepartement");
  $resultat->execute(['debutdepartement' => $_GET['debutdepartement'] . '%']);
  $data = $resultat->fetchAll(PDO::FETCH_ASSOC);



  echo (json_encode($data));
} catch (PDOException $e) { // En cas d'erreur la mettre dans la variable $e ; PDOExcepetion est une methode qui va chercher l'erreur de connexion
  // En cas d'erreur afficher le message ci dessous
  echo "Error: " . $e->getMessage();
  die; // Si erreur on arrete la
}
