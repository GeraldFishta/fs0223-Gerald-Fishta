"use strict";
class SmartPhone {
    ricarica($) { this.carica = $ + this.carica; }
    numero404() { return `il tuo credito e ${this.carica}`; }
    getNumeroChiamate() { return this.numeroChiamate; }
    chiamata(min) { this.carica = this.carica - min * this.costoMinuto; }
    azzeraChiamate() { this.chiamata(0); }
    constructor(carica, numeroChiamate, costoMinuto) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
}
let MioTelefono = new SmartPhone(5, 0, 0.20);
console.log(MioTelefono.ricarica(5));
console.log(MioTelefono.numero404());
console.log(MioTelefono.chiamata(12));
console.log(MioTelefono.numero404());
console.log(MioTelefono.azzeraChiamate());
