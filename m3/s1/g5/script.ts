interface ISmartPhone {
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica($:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;

}

class SmartPhone implements ISmartPhone {

    carica:number
    numeroChiamate:number;
    costoMinuto:number;

    ricarica($:number):void | number {this.carica = $ + this.carica}
    numero404():string{return `il tuo credito e ${this.carica}`}
    getNumeroChiamate():number{return this.numeroChiamate}
    chiamata(min:number):void{ this.carica = this.carica - min * this.costoMinuto}
    azzeraChiamate():void{this.chiamata(0)}

    constructor (carica:number, numeroChiamate:number, costoMinuto:number){
            this.carica = carica;
            this.numeroChiamate = numeroChiamate;
            this.costoMinuto = costoMinuto
}}


let MioTelefono = new SmartPhone (5, 0, 0.20)

console.log(MioTelefono.ricarica(5))
console.log(MioTelefono.numero404())
console.log(MioTelefono.chiamata(12))
console.log(MioTelefono.numero404())
console.log(MioTelefono.azzeraChiamate())