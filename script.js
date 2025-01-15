//DOM ELEMENTS

const photoElm = document.getElementById("photo")
const BtnElm = document.getElementById("btn")

//FUNCTION

const BigImg = (imgUrl) => {
    const overlay = document.getElementById("img-over"); // seleziono l'overlay
    overlay.querySelector("img").src = imgUrl; //Passo il valore di imgUrl all'overlay
    overlay.classList.add("active"); // Aggiungo la classe  per farlo apparire
};

//EVENTS

function addCard() {   // finzione per aggiungere le foto
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
    .then(function (res) {
        let NewCards = res.data;
        let CardHtml = "";
        NewCards.forEach((photo) => {
            CardHtml += `
            <div class="col">
                <div class="post">
                    <div class="post-image">
                        <img src="${photo.url}" alt="img" class="img-fluid">
                        <img src="img/pin.svg" class="pos-pin">
                    </div>
                    <div class="post-info">${photo.title}</div>
                </div>
            </div>`
        });

        photoElm.innerHTML = CardHtml;

        const cards = document.querySelectorAll(".post"); // seleziono le card
        cards.forEach((post) => { 
            const img = post.querySelector("img");
            post.addEventListener("click", () => BigImg(img.src)) // al click dell'immagine si attiva l'overlay 
        })
  }) }

  addCard();

// bottone di chiusura

BtnElm.addEventListener("click", () => {
    const overlay = document.getElementById("img-over")
    overlay.classList.remove("active");
})