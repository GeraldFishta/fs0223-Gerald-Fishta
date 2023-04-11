// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

let arr= [];

function giveMeRandom(n){
    let arr = []                                   
    for(let i = 0; i < n; i++){                     
        arr.push(Math.floor(Math.random()*10))       
    }
    return arr                                       
} 

function checkArray(){
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] > 5){
            console.log(arr[i])
        }
        else{
            let result = 0 
            forEach(i > 5){        //non capisco il problema,mi sembra ben scritta
                result += arr[i]
            }
    }return result
}}

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

shopppingCart= [];

function shoppingCartTotal(){
    let total = 0
    for(let i = 0; i < shopppingCart.length; i++){
        total += shopppingCart[i].price * shopppingCart[i].quantity
    }
    return total
}
 

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(){
    shopppingCart.push({
        price: 88,
        name: "Gerardo",
        id: "id",
        quantity: 1
    })
    return shopppingCart.length
}
 

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(){
    let costoso = 0
    for(let i = 0; i < shopppingCart.length; i++){
        if(shopppingCart[i].price > costoso){
            costoso = shopppingCart[i].price
        }
    }
    return costoso
}
 
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart(){
    return shopppingCart[shopppingCart.length - 1]
}
 
/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(numero, ){
    
  
}

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/
arrayParameter = []

function average(){
    for(let i = 0; i < arrayParameter.length; i++){
        if(typeof arrayParameter[i]!== "number"){       //condizione di esistenza sul numero 
            arrayParameter[i] = 0
        }
    }
    return arrayParameter.reduce(a, b) = 
    function(a, b){
        return (a + b) / arrayParameter.length
    }
}
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/
string = []
let len = 0
function longest(){
    for(let i = 0, len = string.length; i < len;){
        if(string[i].length > len){
            len = string[i].length
        }

    }
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
