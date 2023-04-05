/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* 
string: si intende una sequenza di caratteri o di numeri e vengono racchiusi all'interno di "" o '' o ` (backtick). 
numbers: una semplice sequenza di numeri, sia interi che decimali. Questi ultimi verrano divisi dal . (es: 10.3 invece di 10,3)
objects: definiti da {}, in essi abbiamo un insieme di datatype con i rispettivi valori e caratteristiche che si riferiranno al object a cui appartengono.
array: insieme di piu valori definiti da [], nel quale si susseguono divisi tra loro da una virgola , .
boolean: indica una coppia di valore che possono essere TRUE o FALSE, nel quale uno esclude l'altro. Utilizzato per verificare una condizione.
null: un datatype con la quale viene espressa l'assenza di un valore o di una definizione dell'




/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Gerald"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

function somma(){
  let x = 12
  let y = 20
  let z = x + y
  console.log(z)
};

somma()

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/


name = "Fishta";
console.log(name);
// const name = "NameConst";

//D2.js:70 Uncaught SyntaxError: Identifier 'name' has already been declared (at D2.js:70:7)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4-x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log(name1 != name2);
console.log(name1 == name2);