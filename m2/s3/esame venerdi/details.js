let nameInput = document.querySelector('#name')
let descriptionInput = document.querySelector('#description')
let brandInput = document.querySelector('#brand')
let priceInput = document.querySelector('#price')
let imagineInput = document.querySelector('#imgUrl')
let saveButton = document.querySelector('#save-button')
let deleteButton = document.querySelector('#delete-button')
let rowReference   = document.querySelector('#events-container')
let fetchUrl = "https://striveschool-api.herokuapp.com/api/product/";
let details = document.querySelector('#details')
let dettagliButton = document.querySelector('#dettagli')
let adressBarContent = new URLSearchParams(window.location.search)
let eventId = adressBarContent.get('eventId')

function Phone(name = nameInput.value, description = descriptionInput.value, brand = brandInput.value, price = priceInput.value, image = imagineInput.value) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.imageUrl = image;
}

let showProducts = function () {
    
fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDVkNzg4Zjc0MDAwMTQyODc0ODgiLCJpYXQiOjE2ODM4ODM0NzksImV4cCI6MTY4NTA5MzA3OX0.k78ZCoP1rC9euVSQ68bNPaqZ6OAMM-MTQpfZc06pTmk"
    }
    })
    .then((res) => {
        if (res.ok) {
            return res.json()
        } else {
            throw new Error ("errore")
        }
    })
    .then((event) => {
        console.log(event)
          let colTemplate = `
          <div class="col-12 col-md-4 mb-4">
            <div class="card" style="display: flex;justify-content: center;align-content: center;align-items: center; padding: 5px; box-shadow: 5px 5px 8px lightgray;">
            <img class= "w-100" style="height: 550px;object-fit:cover;object-position:50% 50%;"" src="${event.imageUrl}" alt="">
              <div class="card-body" style="
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-items: center;
          ">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">
                  ${event.description}
                </p>
                <p>${event.brand} - ${event.price}€</p>
                <a href="./backoffice.html?eventId=${
                  event._id
                }" class="btn btn-dark">MODIFICA</a>
              </div>
              <a href="./details.html?eventId=${
                event._id
              }" class="btn btn-dark" id="dettagliButton">DETTAGLI</a>
            </div>
            </div>
          </div>
          `
          details.innerHTML = colTemplate
        })
    
    .catch((err) => {
      console.log(err)
    })
}

window.onload = () => {
    showProducts()
}