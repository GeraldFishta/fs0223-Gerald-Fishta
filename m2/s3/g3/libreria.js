fetch('https://striveschool-api.herokuapp.com/books')     //fetcho l url datomi
.then((res) => {                                          //then per una risposta
if (res.ok) {                                              //se funziona dammi i dati
    return res.json()
}else {
    throw new Error ('Si e verificato un errore')          //se no sto ..
}
})
.then((data) => {                //secondo then per lavorare i dati json dati dal server 
    console.log("libro", data)  //funziona, e un array di 50 libri. per ognuna fai una card..
    let bookCards = "";
    let bookNames = "";
    data.forEach((book, index) => {
        if (index % 4 === 0) {                 // proviamo dandogli una riga divisa ogni 4 libri che piglia
          bookCards += '<div class="row">'
        }
 
         bookCards += 
        `
        <div class= "col-xs-12 col-sm-10 col-md-8 col-lg-6 col-xl-3 col-xxl-3 mb-3">   
            <div class="card">                
            <img src= "${book.img}" class= "card img-top"/>   
            <div class= "card-body">
                <h4 class="card-title">${book.title}</h4>
                <p class= "card-text">${book.price}</p>
                <button class= "btn btn-danger" onClick= "removeBook(event)">Scarta</button>
            </div>
            </div>
            </div>
            `

            if (index % 4 === 3 || index === data.length - 1) { // se la riga arriva a 4 chiude 

            bookCards += `</div>`
        }
        bookNames += `<li>${book.title}</li>`
        })
        document.querySelector("#book-list").innerHTML = bookCards;
        document.querySelector("#book-names").innerHTML= bookNames;  

})

.catch((err) => {
    console.log(err)
  })

function removeBook (event){
    event.target.closest(".col-xxl-3").remove()  //in scarta avevo richiamato col senza il .col prima.  continua ad apparire solo un libro
}

//sta funzionando ma ne appare solo uno di libro