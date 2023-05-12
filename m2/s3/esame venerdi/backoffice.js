let nameInput = document.querySelector('#name')
let descriptionInput = document.querySelector('#description')
let brandInput = document.querySelector('#brand')
let priceInput = document.querySelector('#price')
let imagineInput = document.querySelector('#imgUrl')
let saveButton = document.querySelector('#save-button')
console.log(nameInput)

function Phone(name = nameInput.value, description = descriptionInput.value, brand = brandInput.value, price = priceInput.value, image = imagineInput.value) {
    this.name = name;
    this.description = description;
    this.brand = brand;
    this.price = price;
    this.imageUrl = image;
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

    .then((product) => {
        console.log("array")
        console.log(newPhone)
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