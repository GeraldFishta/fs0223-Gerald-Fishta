/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
{
function stringheUnify(str1, str2) {                   //definisco la funzione
  let str1First2 = str1.slice(0, 2);                   //primo taglio   assegno a variabile per riutilizzae dopo il risultato
  let str2Last3 = str2.slice(str2.length - 3);         //secondo taglio
  let  nStr = str1First2 + str2Last3;                   //unisco , potevo usare join??
  let upperStringa = nStr.toUpperCase();                //uppero tutto 
  console.log(upperStringa);
}
}

/* ESERCIZIO 2
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
{
function giveMeRandom(n){                           

  let arr = []                                          //creo array da pushare
  for(let i = 0; i < 10; i++){                         //ciclo con i < 10 perche voglio 10 numeri
      arr.push(Math.floor(Math.random()*100))           //genero numeri fino a cento
  }
  return arr                                       
} 

console.log(giveMeRandom(9))
}

/* ESERCIZIO 3
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici (suggerimento: il metodo filter può aiutare)
*/
{
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 
function onlyPari(){                             //creo funzione
  let pari = arr.filter(function(n){              //assegno a una variabile sempre per utilizzare dopo result , filtro con funzione che definisce il filtro         
    return n % 2 === 0                            //che fa la funzione di definizione
  })
  console.log(pari)                                
}
console.log(onlyPari(arr))
}
/* ESERCIZIO 4
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
{
arrayProva = [1, 2, 3, 4]

function sommaArray(arr){
  let sum = 0                                      //variabile per storeggiare il mio result dinamico
  for(i=0; i < arr.length; i++){                 //ciclo come sempre
    sum += arr[i]                                  //riassegno variabile rissomando vecchio valore al nuovo (arr[i])   
  } return sum 
}
console.log(sommaArray(arrayProva))
}
/* ESERCIZIO 5
  Scrivi una funzione per sommare i numeri contenuti in un array (usare REDUCE)
*/

arrayProva = [1, 2, 3, 4, 6]
 
function sommaArray(arr){                
  let sum = arr.reduce(function(i){          //reduce sull array
      for(i= 0; i < arr.lenght; i++){         //ciclo con for   
        i += arr[i]                            //somma ciclata
      } return sum
  })    
}
console.log(sommaArray(arrayProva))


/* ESERCIZIO 6
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/

function ritorno(arr, n){                     //def parametri
  let arr2 = []                                 //creo secondo array da pushare
  for(let i = 0; i < arr.length ; i++){        //ciclo con for gli elementi del 
    arr2.push(arr[i]+ n )                     // pusho nel array2 il valore dell elemento array1 in ciclo sommato con n, finche array1 non finisce
  }
  return arr2
}
tryingArray = [1,2,3,4,5]
console.log(ritorno(tryingArray, 5))

/* ESERCIZIO 8
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
arrayStringhe = ["voglio", "fumare", "una","sigaretta"]
function stringheSum(arr){
  let arr2 = []                                 //creo secondo array da pushare
  for(let i = 0; i < arr.length ; i++){        //ciclo con for gli elementi del 
    arr2.push(arr[i].length)                     // pusho nel array2 il valore della lunghezza dell elemento in ciclo del array1
  }
  return arr2
}
console.log(stringheSum(arrayStringhe))

/* ESERCIZIO 9
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
function allDispari(){
  let arr = []
  for ( let i = 1 ; i <= 99; i++){
        if (i % 2 !== 0 ){
        arr.push(i)
      }
      }
      return arr
    } 
    console.log(allDispari())
/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg"
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg"
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg"
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg"
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
  }
];

/* ESERCIZIO 10
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/

function oldestFilm(movies){                    
  anno = movies[0].Year;                  // parto dando alla var dinamica di storage result il primo valore della lista
  for( i=0; i<movies.length; i++ ){         //ciclo 
    if ( movies[i].Year < anno ){           //condizione, se l anno del film che stai ciclando e < anno 
       anno = movies[i].Year;               //allora anno diventa quell'anno li
    }
  } return anno
} console.log(oldestFilm(movies));

/* ESERCIZIO 11
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
function numeroFilm(movies){
  return movies.length            //..ok
}
console.log(numeroFilm(movies))
/* ESERCIZIO 12
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

function titoliFilm(movies){
  return movies.map(function(film){     //map chiama la funzione su ogni elemento del array
    return film.Title                    //la funzione richiede semplicemente il Title della variabile a cui e assegnata nell array
  })
}
console.log(titoliFilm(movies))          //consollo

/* ESERCIZIO 13
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

function onlyMillenials(movies){
  return movies.filter(function(film){       //filtro movies, dandogli una funzione sui singoli elementi, in questo caso film perche ha senso dai
    return film.Year > 2000                     //la funzione deve semplicemente ridarmi solo i film con .Year maggiori di 2000
  } )
}
console.log(onlyMillenials(movies))              //e riconsollo
/* ESERCIZIO 14
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/

function specificFilm(movies, imdbID){                  //doppio parametro
  return movies.filter(function(film){       //stesso ragionamento MA, 
    return film.imdbID === imdbID                 //cambio dicendo che l imbID del film nell array filtrato deve combaciare con il parametro fornito 
  } )
}
console.log(specificFilm(movies, "tt4154796"))
/* ESERCIZIO 15
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/


function totalYears(movies, Year){      //doppio parametro
 anni = parseInt(movies[0].Year);       //variabile in somma, do parseInt per trasformare in numeri le stringhe che gli vengono date e da cui parte
  for( i=0; i<movies.length; i++ ){     //ciclo
    anni += parseInt(movies[i].Year);      //uguale + somma con parseInt per ognuno degli elementi dell array tramite ciclo
  } 
  return anni
}
console.log(totalYears(movies))           // consolbaby!