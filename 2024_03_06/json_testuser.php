 <?php

  try {
    // parametre de la bdd
    $host = "localhost";
    $dbname = "commerce";
    $user = "root";
    $pwd = "";

    // connexion a la bdd en utilisant PDO
    $connect = new PDO("mysql:host=$host;dbname=$dbname", $user, $pwd);
    // faire et préparer notre requete sql
    $query = "SELECT count(*) as nb from user where user_mail ='" . $_GET['user_mail'] . "'";
    $result = $connect->prepare($query);
    $result->execute();

    $data = $result->fetchAll(PDO::FETCH_ASSOC);
    echo (json_encode($data));
  } catch (PDOException $e) {
    echo "il y a une erreur" . $e->getmessage();
    die;
  }
