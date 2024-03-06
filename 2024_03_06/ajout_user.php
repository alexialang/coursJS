<?php

try {
  // Parametre de la BDD
  $host = 'localhost';
  $user = 'root';
  $password = '';
  $dbName = 'commerce';

  // Connexion à la BDD
  $connexion = new PDO("mysql:host=$host;dbname=$dbName", $user, $password); // PDO : Bibliothèque d'objet pour ce connecter a une BDD

  // Récuperer les champs du formulaire et faire un INSERT INTO dans la BDD
  var_dump($_POST);
  $requete = ("INSERT INTO clients ('nom_client', 'prenom_client', 'client_courriel', 'user_pwd') VALUES (:nom_client, :prenom_client, :client_courriel, :user_pwd)");
  $resultat = $connexion->prepare($requete);
  $resultat->execute(['user_nom' => $_POST['user_nom'], 'user_prenom' => $_POST['user_prenom'], 'user_mail' => $_POST['user_mail'], 'user_pwd' => $_POST['user_pwd2']]);
} catch (PDOException $e) { // En cas d'erreur la mettre dans la variable $e ; PDOExcepetion est une methode qui va chercher l'erreur de connexion
  // En cas d'erreur afficher le message si dessous
  echo "Error: " . $e->getMessage();
  die; // Si erreur on arrete la
}
