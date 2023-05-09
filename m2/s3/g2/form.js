let saveButton = document.getElementById('save-button') //salvo in variabili gli elementi che dovro manipolare in js richiamandole dall HTML
let clearButton = document.getElementById('clear-button')
let userForm = document.getElementById('name')

// Salvo l'utente registrato in precedenza, se esiste nel fiedl di prima prendendomelo dal local storage

if (localStorage.getItem('savedUser')) {
  userForm.value = localStorage.getItem('savedUser')
}

// Il bottone deve salvare in local storage e ovviamente prevenire che il form mi vada a refreshare
saveButton.addEventListener('click', (e) => {
  e.preventDefault()   // no refresh 
  let savedName = userForm.value   //variabile per il valore preso dal form 
  localStorage.setItem('savedUser', savedName) //vai emettilo in local storage (devo darglielo come se fosse n'attributo quindi chiave,valore ) 
  addUserToList(savedName)   //lo butto in lista 
})

//Elimina deve rimuvoere gli users saved dal local storage
clearButton.addEventListener('click', () => {  //al cloick
  localStorage.removeItem('savedUser')  //cava l item savedUser dal local storage
  userForm.value = '' //il form se svuota
})

//Aggiorno la lista dei contatti tramite il localStorage, e prima prendi gli elementi e li converti 
function addUserToList(name) {    
  let savedUsers = localStorage.getItem('savedUsers') //selezioni gli item dal local con variabile
  let userList = document.getElementById('listaUsersPrecedenti')//array 

  if (savedUsers) {                          //se esiste un savedUsers e non e null   
    savedUsers = JSON.parse(savedUsers)    //se esiste devi convertirlo tramite il metodo parse di JSON perche ha solo stringhe, e a noi servono obj
  } else {
    savedUsers = []                        //se non ce sta fai un array vuoto
  }

  savedUsers.push(name)                    //pusha il nome utente preso dall array di salvataggio users
  localStorage.setItem('savedUsers', JSON.stringify(savedUsers)) //aggiorna la lista con l array convertito ovviamente

  let listItem = document.createElement('li')    //crealo e mettilo nella lista
  listItem.innerHTML = name
  userList.appendChild(listItem)
}

//ok funziona!!!


//niente, continua a dare Nan

function tempoTrascorso(){  
    let tempoInizio = JSON.parse(sessionStorage.getItem('tempoInizio'))
	let t = Date.parse(new Date()) - new Date(tempoInizio); 
	let sec = Math.floor( (t/1000) % 60 ); 
	let min = Math.floor( (t/1000/60) % 60 ); 
	let ore = Math.floor( (t/(1000*60*60)) % 24 ); 
	let giorni = Math.floor( t/(1000*60*60*24) ); 

	return { 
		'giorni': giorni, 
		'ore': ore,
		'minuti': min, 
		'secondi': sec 
	}; 
}

if(sessionStorage.getItem("tempoInizio") === null){
    sessionStorage.setItem("tempoInizio", JSON.stringify(new Date()))
    }

    setInterval(function(){
        console.log(tempoTrascorso()); 
    }, 1000)

  
//niente 
