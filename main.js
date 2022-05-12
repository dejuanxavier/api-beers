// ===== Get Beers (liste)

// ===== Fonction asynchrone récupérant l'url après résolution de l'attente de la promesse du serveur.
// ===== Stockée dans la variable response.
async function getBeers() {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers/');
    // ===== Retourne la valeur response avec uniquement les informations contenues dans le data. 
    return response.data;
  }
  catch (error) {
    console.log(error);
  }
}

// ===== Récupération de la fonction dans la variable beers.
// ===== Le tableau des bières est à présent disponible pour utilisation.
const beers = await getBeers();

let description = document.querySelector('#description');
let nourritureAccompagnement = document.querySelector('#nourriture');
let ingredients = document.querySelector('#ingredients');
let fabrication = document.querySelector('#fabrication');


// ===== Fonction qui devrait permettre d'afficher sous forme de cards les bières avec les détails choisis (nom, petite présentation, image, etc).
function beersShow() {

  // ===== Variable récupérant dans l'html toute la ligne et tous les tags ou se trouve "cardModal".
  let cardHtml = document.querySelector("#cardModal");

  // ===== Variable prenant en compte le clique sur le bouton détails.

  // ===== Création d'une boucle array qui parcours le array beers.
  for (let beer of beers) {

    // ===== Création des cards se générant automatiquement selon le Array beers ex: 10 bières ou 25 bières comme cet exercice.
    // ===== AppendChild permet de lier la div ou tag parent à la div ou tag enfant.
    let colDiv = document.createElement("div");
    colDiv.className = "col-2";
    colDiv.style = "background-color: #222222;"
    cardHtml.appendChild(colDiv);

    let cardDiv = document.createElement("div");
    cardDiv.className = "card p-2 m-3";
    cardDiv.setAttribute("id", "getBeers");
    colDiv.appendChild(cardDiv);

    let img = document.createElement("img");
    img.className = "card-img-top w-50 img-fluid"; 
    img.setAttribute("id", "image")
    img.src = beer.image_url;
    cardDiv.appendChild(img);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.className = "card-body";
    cardDiv.appendChild(cardBodyDiv);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.setAttribute("id", "nom");
    cardTitle.textContent = beer.name;
    cardBodyDiv.appendChild(cardTitle);

    let sloganDiv = document.createElement("p");
    sloganDiv.className = "card-text";
    sloganDiv.setAttribute("id", "slogan");
    sloganDiv.innerHTML = beer.tagline;
    cardBodyDiv.appendChild(sloganDiv);

    // bouton modale
    let buttonModalShow = document.createElement("button");
    // Type visuel du bouton. (gris pour secondary)
    buttonModalShow.className = "btn btn-secondary";
    // Id du bouton s'adapte à l'id du tableau beer.
    buttonModalShow.setAttribute("id", beer.id);
    // Type de tag. (bouton)
    buttonModalShow.setAttribute("type", "button");
    // Toggle pour le type. (modal)
    buttonModalShow.setAttribute("data-bs-toggle", "modal");
    // Cible l'id dans html.
    buttonModalShow.setAttribute("data-bs-target", "#modalDetail");
    // Ecriture sur le bouton.
    buttonModalShow.innerHTML = "Détails";
    cardBodyDiv.appendChild(buttonModalShow);

  }
}

let modalDetail = document.getElementById('modalDetail');

modalDetail.addEventListener('show.bs.modal', function (event) {

  let button = event.relatedTarget;
  let id = button.getAttribute('id');
  id = parseInt(id);

  const beerId = beers.find(element => element.id === id);

  //Textes dans la modale
  description.innerHTML = beerId.description;
  nourritureAccompagnement.innerHTML = beerId.food_pairing;


  // ======= Tableau dans tableau dans tableau trop compliqué pour moi :(

  // ingredients.innerHTML = beerId.ingredients;
  // fabrication.innerHTML = beerId.method;

})

// ===== Appel de la fonction qui sans son appel rien ne s'affiche. 
beersShow();

