//DOM ELEMENTS

const photoElm = document.getElementById("photo")
const BtnElm = document.getElementById("btn")

//EVENTS
function addCard() {
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
  }) }

  addCard();