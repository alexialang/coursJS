// Identifiants de l'application Spotify
const clientID = "1ffae9b50811405b9a2c10bc9a6b5bc7";
const clientSecret = "af6e5e6643ae4aac8035922bec32f61f";

// URL pour obtenir un jeton d'accès à l'API Spotify
const tokenURL = "https://accounts.spotify.com/api/token";

// URL de l'API Spotify pour récupérer des informations sur un artiste spécifique (par exemple, "Coldplay")
const artistURL = "https://api.spotify.com/v1/search?q=Floracash&type=artist";

// Données à envoyer dans la requête POST pour obtenir le jeton d'accès
const tokenData = new URLSearchParams();
tokenData.append("grant_type", "client_credentials");
tokenData.append("client_id", clientID);
tokenData.append("client_secret", clientSecret);

// Configuration de la requête pour obtenir le jeton d'accès
const tokenRequestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: tokenData,
};

// Fonction pour obtenir le jeton d'accès à partir de l'API Spotify
async function getToken() {
  try {
    const response = await fetch(tokenURL, tokenRequestOptions);
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Erreur lors de la récupération du jeton d'accès:", error);
    throw error;
  }
}

// Fonction pour récupérer les playlists de l'utilisateur à partir de l'API Spotify
async function getUserPlaylists(accessToken) {
  try {
    const playlistsURL = "https://api.spotify.com/v1/me/playlists";
    const requestOptions = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(playlistsURL, requestOptions);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error("Erreur lors de la récupération des playlists:", error);
    throw error;
  }
}

// Fonction pour afficher les playlists dans le HTML
function displayPlaylists(playlists) {
  const playlistsDiv = document.getElementById("playlists");

  playlists.forEach((playlist) => {
    const playlistItem = document.createElement("div");
    playlistItem.innerHTML = `<p>${playlist.name}</p>`;
    playlistsDiv.appendChild(playlistItem);
  });
}
// Fonction principale pour exécuter les opérations
async function main() {
  try {
    // Obtenir le jeton d'accès
    const accessToken = await getToken();

    // Récupérer les playlists de l'utilisateur
    const playlists = await getUserPlaylists(accessToken);

    // Afficher les playlists dans le HTML
    displayPlaylists(playlists);
  } catch (error) {
    console.error("Une erreur est survenue:", error);
  }
}

// Exécuter la fonction principale
main();
