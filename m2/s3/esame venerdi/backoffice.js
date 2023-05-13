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

let getProducts = function () {
    
fetch("https://striveschool-api.herokuapp.com/api/product/", {
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
    .then((data) => {
        console.log('EVENTI IN DB', data)
        data.forEach((event) => {
          let colTemplate = `
          <div class="col-12 col-md-3">
            <div class="card" style="display: flex;justify-content: center;align-content: center;align-items: center;"">
            <img class= "w-100" style="height:220px" src="${event.imageUrl}" alt="">
              <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">
                  ${event.description}
                </p>
                <p>${event.brand} - ${event.price}€</p>
                <a href="./backoffice.html?eventId=${
                  event._id
                }" class="btn btn-primary">MODIFICA</a>
              </div>
              <a href="./details.html?eventId=${
                event._id
              }" class="btn btn-primary" id="dettagliButton">DETTAGLI</a>
            </div>
            </div>
          </div>
          `
          rowReference.innerHTML += colTemplate
        })
    })
    .catch((err) => {
      console.log(err)
    })
}

window.onload = () => {
    getProducts()
}





fetch("https://striveschool-api.herokuapp.com/api/product/", {
    headers: {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDVkNzg4Zjc0MDAwMTQyODc0ODgiLCJpYXQiOjE2ODM4ODM0NzksImV4cCI6MTY4NTA5MzA3OX0.k78ZCoP1rC9euVSQ68bNPaqZ6OAMM-MTQpfZc06pTmk"
    }
    })
    .then((res) => {
        if (res.ok) {
          return res.json()
          
        } else {
            throw new Error("Errore nel recupero dei dati")
        }   
        })

        .then((data) => {
            console.log('EVENTI IN DB', data)
          })
        .catch((err) => {
        console.log(err)
    })    


    saveButton.addEventListener('click', function (e)  {
        e.preventDefault();
        fetch(eventId ? fetchUrl + eventId : fetchUrl, {
        method: eventId ? "PUT" : "POST",
        body: JSON.stringify(new Phone()),
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDVkNzg4Zjc0MDAwMTQyODc0ODgiLCJpYXQiOjE2ODM4ODM0NzksImV4cCI6MTY4NTA5MzA3OX0.k78ZCoP1rC9euVSQ68bNPaqZ6OAMM-MTQpfZc06pTmk",
            "Content-Type": "application/json"    
        },
        })
        .then((res) => {
            location.assign("./homepage.html")
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })    
    })


    console.log(eventId , "EVENT ID")

    if (eventId) {
        deleteButton.addEventListener('click', () => {
            fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId , {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDVkNzg4Zjc0MDAwMTQyODc0ODgiLCJpYXQiOjE2ODM4ODM0NzksImV4cCI6MTY4NTA5MzA3OX0.k78ZCoP1rC9euVSQ68bNPaqZ6OAMM-MTQpfZc06pTmk",
            "Content-Type": "application/json"    
        }})
    .then((res) =>{
        console.log(res)
        if(res.ok) {
            location.assign("./homepage.html")
        }
    })
    .catch((err) =>{
        throw new Error("problema")
        
    })
})
    }


    
const form = document.getElementById('event-form');
const submitButton = document.getElementById('save-button');


submitButton.addEventListener('click', function(event) {

  event.preventDefault();


  const nameField = document.getElementById('name');
  const descriptionField = document.getElementById('description');
  const brandField = document.getElementById('brand');
  const priceField = document.getElementById('price');
  const imgUrlField = document.getElementById('imgUrl');


  if (nameField.value === '' || descriptionField.value === '' || brandField.value === '' || priceField.value === '' || imgUrlField.value === '') {

    alert('Riempire correttamente tutti i campi, grazie.');


    return;
  }

  form.submit();
});