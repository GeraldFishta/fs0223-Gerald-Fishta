let nameInput = document.querySelector('#name')
let descriptionInput = document.querySelector('#description')
let brandInput = document.querySelector('#brand')
let priceInput = document.querySelector('#price')
let imagineInput = document.querySelector('#imgUrl')
let saveButton = document.querySelector('#save-button')
let deleteButton = document.querySelector('#delete-button')
let rowReference   = document.querySelector('#events-container')

console.log(nameInput)

function Phone(name = nameInput.value, description = descriptionInput.value, brand = brandInput.value, price = priceInput.value, image = imagineInput.value) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.imageUrl = image;
}

    let getProducts = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/")
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
            <div class="card">
            <img src="${event.imageUrl}" alt="" class="card-img">
              <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">
                  ${event.description}
                </p>
                <p>${event.brand} - ${
            event.price
          }€</p>
                <a href="./backoffice.html?eventId=${
                  event._id
                }" class="btn btn-primary">MODIFICA</a>
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
            data.forEach((event) => {
              let colTemplate = `
              <div class="col-12 col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">
                      ${event.description}
                    </p>
                    <p>${new Date(event.time).toLocaleDateString('it-IT')} - ${
                event.price
              }€</p>
                    <a href="./backoffice.html?eventId=${
                      event._id
                    }" class="btn btn-primary">MODIFICA</a>
                  </div>
                </div>
              </div>
              `
              let rowReference = document.getElementById('events-container') // <div class="row"></div>
              rowReference.innerHTML += colTemplate

            })
          })
    .catch((err) => {
        console.log(err)
    })    


    saveButton.addEventListener('click', function (e)  {
        e.preventDefault()
        fetch("https://striveschool-api.herokuapp.com/api/product/", {
        method: "POST",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDVkNzg4Zjc0MDAwMTQyODc0ODgiLCJpYXQiOjE2ODM4ODM0NzksImV4cCI6MTY4NTA5MzA3OX0.k78ZCoP1rC9euVSQ68bNPaqZ6OAMM-MTQpfZc06pTmk",
            "Content-Type": "application/json"    
        },
        body: JSON.stringify(new Phone())
        })
        .then((res) => {
                console.log(new Phone)
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })    
    })


    deleteButton.addEventListener("click", function(e) {
        e.preventDefault();
        fetch("https://striveschool-api.herokuapp.com/api/product/", {
            method: "DELETE",
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVlMDVkNzg4Zjc0MDAwMTQyODc0ODgiLCJpYXQiOjE2ODM4ODM0NzksImV4cCI6MTY4NTA5MzA3OX0.k78ZCoP1rC9euVSQ68bNPaqZ6OAMM-MTQpfZc06pTmk",
                "Content-Type": "application/json"    
    }})
    .then((res) =>{
        console.log(res)
    })
    .catch((err) =>{
        console.log(err)
    }
    )
})