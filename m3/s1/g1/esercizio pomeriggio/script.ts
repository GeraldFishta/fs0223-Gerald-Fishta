console.log("hello world!");

let numero1:number = 4;
let numero2:number = 34; 

let numeroGenerato:number; 
numeroGenerato = Math.floor(Math.random() * (100 - 1) + 1)
console.log(numeroGenerato)

if (Math.abs(numero1 - numeroGenerato) < Math.abs(numero2 - numeroGenerato) || (numero1 === numeroGenerato)){
    console.log("numero 1 vince la scommessa")
} else if (Math.abs(numero2 - numeroGenerato) < Math.abs(numero1 - numeroGenerato) || (numero2 === numeroGenerato)){
    console.log("numero 2 vince la scommessa")
} else {
    console.log("numero 1 e 2 vincono la scommessa")
}
