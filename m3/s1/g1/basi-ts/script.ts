console.log('Hello World')


let nome:string = "Mario";
let anni:number = 30; 
let boolean:boolean = false; 
let array:any[] = [20, "testo", true];
let arrayString:string[] = ["stringa"];
let arrayNumber:number[] = [30,15,24];

nome = "Marco";
let vuota:undefined|number; 
vuota = 0; 

function saluto ():void {
    console.log('ciao')
}

saluto(); 


/*tipizzazione oggetti*/

let user:{nome:string} = {
    nome:"Mario"
}

console.log(user.nome);
