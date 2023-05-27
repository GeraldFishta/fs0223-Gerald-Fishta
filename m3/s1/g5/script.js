"use strict";
/*
Extra:

Aggiungi una proprietà registroChiamate che contenga un array di oggetti contenenti i seguenti dati:
id
durata
Data ed ora della chiamata

Aggiorna la classe in modo che il registro funzioni, e crea i seguenti metodi:
mostraRegistroChiamate() => mostra tutte le chiamate effettuate
filtraChiamatePerDataOra() => mostra solo le chiamate effettuate in una determinata data ed ora
*/
class SmartPhone {
    ricarica($) { this.carica = $ + this.carica; }
    numero404() { return `il tuo credito e ${this.carica}`; }
    getNumeroChiamate() { return this.numeroChiamate; }
    chiamata(min) {
        this.carica = this.carica - min * this.costoMinuto;
        this.numeroChiamate = this.numeroChiamate + 1;
        let chiamata = {
            id: this.registroChiamate.length + 1,
            durata: min,
            dataeOra: new Date()
        };
        this.registroChiamate.push(chiamata);
    }
    azzeraChiamate() { this.numeroChiamate = 0; }
    mostraRegistroChiamate() {
        this.registroChiamate.forEach((element) => {
            console.log(element);
            console.log(`Questa chiamata ha e la numero ${element.id}`);
            console.log(`Questa chiamata ha ha una durata di ${element.durata}`);
            console.log(`Questa chiamata e stata effetuata il ${element.dataeOra}`);
        });
    }
    constructor(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
}
let MioTelefono = new SmartPhone(5);
MioTelefono.ricarica(5);
console.log(MioTelefono.numero404());
MioTelefono.chiamata(12);
MioTelefono.ricarica(5);
MioTelefono.ricarica(8);
MioTelefono.chiamata(3);
MioTelefono.chiamata(6);
console.log(MioTelefono.numero404());
console.log(MioTelefono.getNumeroChiamate());
MioTelefono.mostraRegistroChiamate();
console.log(MioTelefono.azzeraChiamate());
