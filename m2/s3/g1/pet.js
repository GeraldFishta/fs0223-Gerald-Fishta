let arrayPets = [];

let petNameField = document.querySelector("#petName")
let ownerNameField = document.querySelector("#ownerName")
let speciesNameField = document.querySelector("#species")
let breedNameField = document.querySelector("#breed")

class Pet {
  constructor(petName, ownerName, species, breed) {
      this.petName = petName
      this.ownerName= ownerName
      this.species = species
      this.breed = breed
  }
  sameOwnerPet = function (otherPet){
   if (this.OwnerName === otherPet.OwnerName){
    return true }
    else {
      return false
    }
   }
  }

document.getElementById("check").addEventListener("click", () => {
  let lastPet = arrayPets[arrayPets.length -1]
  let secondLastPet = arrayPets[arrayPets.length -2]
  alert(lastPet.sameOwnerPet(secondLastPet))
})

const emptyPetList = function () {
  petListReference = document.getElementById("petList")
  petListReference.innerHTML = ''
}

let pushingPetsInHtml = function(){
  petListReference = document.getElementById("petList")
  arrayPets.forEach(pet => {
        let newLi = document.createElement("li")
        newLi.innerText = `il pet si chiama ${pet.petName}, il suo propietario si chiama ${pet.ownerName}, e un ${pet.species} ${pet.breed}`
        petListReference.appendChild(newLi)
      })
}

let petFormReference = document.querySelector("form")

petFormReference.addEventListener("submit", (e) =>{
  e.preventDefault()

  let petCreated =  new Pet(petNameField.value, ownerNameField.value, speciesNameField.value, breedNameField.value)
  console.log("un nuovo pet", petCreated)
  arrayPets.push(petCreated)
  petNameField.value = "";
  ownerNameField.value = "";
  speciesNameField.value= "";
  breedNameField.value= "";
  emptyPetList()
  pushingPetsInHtml()
  
})