

//DOM ELM
const cardElm = document.getElementById("card");
const cardImgElm = document.querySelectorAll(".img-post");

function addCard() {
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(function (resp) {
    const newCard = resp.data; 
    newCard.forEach(card => {
        const title = card.title;
        const image = card.url;
        cardElm.innerHTML += `
       
                <div class="col">
                <div class="post">
                    <div class="post-image">
                        <img class="img-post" src="${image}" alt="Prodotto 1">
                    </div>
                    <div class="post-info">
                        <p>${title}</p>
                    
                    </div>
                </div>
                </div>
            
      `;
    });
  });
   }

   addCard();


 
