//inserisco un testo nel html
document.getElementById("div1").innerHTML = "hello world";
//inserisco messaggi nel console log (vari=> definisco variabile, eseguo in console)
console.log("o lo scrivo diretto in js");

var nameMio = "Gerald";
console.log( nameMio );

var name= "Gerald";
var lastName= "Fishta"
var eta= 30;
var approvato= true;
//ora creo un oggetto con piu variabili
var persona = {
    name: "Geraldo",
    age: 30
};

console.log(persona);

//funzioni

function greetings(name, lastName) {
    console.log("hello"+" " + name+" "+lastName);
}
greetings("Giovanni", "Dorucci");  // immetto nella console hello user 

//funzione di calcolo

function quadrato(numero) {
    return numero * numero;
}

var numero = quadrato(4);
console.log(numero)