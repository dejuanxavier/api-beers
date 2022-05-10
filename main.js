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



// ===== Fonction qui devrait permettre d'afficher sous forme de cards les bières avec les détails choisis (nom, petite présentation, image, etc).
function beersShow() {

// ===== Variable récupérant dans l'html toute la ligne ou se trouve "cardModal".
let cardHtml = document.querySelector("#cardModal");

// ===== Variable prenant en compte le clique sur le bouton détails.
let details = document.addEventListener ("click", function () {
  console.log(details)
});

// ===== Création d'une boucle array qui parcours le array beers.
  for(let beer of beers) {
    console.log(beer);
    console.log(beers)
    
    // ===== Création supposée des cards se générant automatiquement selon le Array beers ex: 10 bières ou 25 bières comme cet exercice.
    // ===== AppendChild permet de lier la div ou tag parent à la div ou tag enfant.
    let colDiv = document.createElement("div");
    colDiv.classList = "col-2";
      cardHtml.appendChild(colDiv);

    let cardDiv = document.createElement("div");
    cardDiv.classList = "card";
    cardDiv.setAttribute = ("id", "getBeers");
      colDiv.appendChild(cardDiv);

    let img = document.createElement("img");
    img.classList = "card-img-top";
    img.setAttribute = ("id", "image")
    img.src = beer.image_url;
      cardDiv.appendChild(img);

    let cardBodyDiv = document.createElement("div");
    cardBodyDiv.classList = "card-body";
      img.appendChild(cardBodyDiv);

    let cardTitle = document.createElement("h5");
    cardTitle.classList = "card-title";
    cardTitle.setAttribute = ("id", "nom");
    cardTitle.innerHTML = beer.name;

    let sloganDiv = document.createElement("p");
    sloganDiv.classList = "card-text";
    sloganDiv.setAttribute = ("id", "slogan");
    sloganDiv.innerHTML = beer.tagline;

    let modalDiv = document.createElement("a");
    modalDiv.classList = "btn btn-primary";
    modalDiv.setAttribute = ("id", "details");
      cardBodyDiv.appendChild(modalDiv);
      cardBodyDiv.appendChild(sloganDiv);
      cardBodyDiv.appendChild(cardTitle);  
   
    // return cardHtml;

  }  
}
// ===== Appel de la fonction qui sans son appel rien ne s'affiche. 
beersShow();



// async function getBeerId() {
//   try {
//     const response = await axios.get('https://api.punkapi.com/v2/beer/1');
//     console.log(response);
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// await getBeerId();


// async function getBeerRand() {
//   try {
//     const response = await axios.get('https://api.punkapi.com/v2/beers/random');
//     console.log(response);
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// await getBeerRand();
