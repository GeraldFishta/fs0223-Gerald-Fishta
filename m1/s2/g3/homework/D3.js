/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
{
let a = 2
let b = 3
if(a>b){
  console.log(`${a} e maggiore${b}`);
}else if(a<b){
  console.log(`${a} e minore ${b} `);
}else{
  console.log(`${a} uguale a ${b}`)
}
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
{
let indovinaNumero = prompt("scrivere un numero")
if(indovinaNumero !=5){
  console.log("benone!")
}else{
  console.log("sfortunato")
}
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
{

let number = 9
if(number % 5 == true){
  console.log("e possibile")
}else{console.log("non e possibile")}

}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let x = 12
let y = 14
if(x == 8 || y == 8 ){
  console.log("uno dei due e uguale 8")
}
else if(x - y == 8){
  console.log("la sottrazione mi dara 8")
}else if(x + y == 8){
  console.log("l'addizione mi dara 8")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

{
let q = 25
let w = 13
let e = 31
let totalShoppingCart = q + w + e
if(totalShoppingCart > 50){
 console.log(totalShoppingCart)
}else{
  consol.log(totalShoppingCart += 10)
}
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let q = 25
let w = 13
let e = 31
let totalShoppingCart = q + w + e
let discount = ((totalShoppingCart)*0.8)
if(discount > 50){
 console.log(discount)
}else{
  console.log(discount += 10)
}




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let z = 15
let i = 17
let p = 3
let arrayNumeri = [z+i+p]
let ordine = arrayNumeri.sort()
console.log(ordine)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let g = 15

if(typeof(g) ==="number"){
  console.log(`${g} e un numero`)
}else{
  console.log(`${g} non e un numero`)
}




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let h = 7
if(h%2==0){
  console.log( "se ottengo 0 allora e pari")
}else{
  console.log( "allora e dispari")
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (!(val < 10) ){
  console.log("val e minore di 10")
}else if (!val < 5) {
  console.log("val e minore di 5")
}else{
  console.log("val uguale a 10 o maggiore")
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me ["city"] = "toronto"; 
console.log(me)
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me ["city"] = "toronto"; 
delete me.lastName;
console.log(me)
}

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
{
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}
me ["city"] = "toronto"; 
delete me.skills;
console.log(me)
}

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],}
me.skills.pop();


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
{
let emptyArray = []
emptyArray.push(1,2,3,4,5,6,7,8,9,10)
console.log(emptyArray)
}



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

let emptyArray = []
emptyArray.push(1,2,3,4,5,6,7,8,9,10)
let x1 = 100
emptyArray[emptyArray.lenght - 1] = 100
console.log(emptyArray)
//mi risulta Nan invece della sostituzione ===> chiedere a Michele!
