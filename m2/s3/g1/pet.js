

//creo il costruttore Pet in Js, assegnandoli i parametri che mi interessa tenga in conto negli oggetti

class Pet {
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName;
        this.ownerName = _ownerName;
        this.species = _species;
        this.species= _species;
    }
    //qua creo la funzione per verificare che due animali abbiamo lo stesso propietario
    sameOwner(animal) {
        if(this.ownerName == animal.ownerName)
        return true
    }
}
 
//ora qua creo l'espresssioni del let per il form e per la lista perche avro bisogno di maneggiarle, creando anche un array vuoto
//dove mettere i diversi Pet 

let petForm = document.getElementById('pet-form');  
let petList = document.getElementById('pet-list');
const pets = []


//si crea una funzione per renderizzare la lista una volta ricevuti i dati dal form 

function renderPetList() {
    pets.forEach(pet => {
      const li = document.createElement('li');
      li.textContent = `${pet.petName} - ${pet.ownerName} - ${pet.species} - ${pet.breed}`;
      petList.appendChild(li);
    });
  }

//ogni form e cosi simpatico da refreshare la pagina, quindi grazie a google sappiamo come impedirglielo!
//dopo deve prendere i valori all interno delle proprieta che ci interessano nell oggetto 
//e creare il nuovo Pet con i valori di prima, fatto cio pusha nella lista e renderizzala 

petForm.addEventListener('submit', e  => {
    e.preventDefault();
    
    
    //non sono certo funzioni, ma continuiamo enunciando le variabili che corriponderanno ai valori all interno dei vari pet;
    
    const petName = document.getElementById('pet-name').value;
    const ownerName = document.getElementById('owner-name').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;
    
    
    const pet = new Pet(petName, ownerName, species, breed);
    pets.push(pet);
    
    renderPetList();
    petForm.reset();
});


//ovviamente non va!!!! l'amico Null e sempre con noi e allora tiro un bel bestemmione e ci torno dopo
