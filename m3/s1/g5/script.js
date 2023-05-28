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
    constructor(carica) {
        this.carica = carica;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.registroChiamate = [];
    }
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
            console.log(`Questa chiamata e stata effetuata il ${element.dataeOra.toLocaleString("it-IT")}`);
        });
    }
    filtraChiamatePerDataOra(element) {
        console.log(element.toLocaleString("it-IT"));
        return this.registroChiamate.filter((e) => {
            if (e.dataeOra.toLocaleDateString("it-IT") == element.toLocaleDateString("it-IT")) {
                return e;
            }
        });
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
console.log(MioTelefono.filtraChiamatePerDataOra(new Date("2023/05/28")));
let MioTelefono1 = new SmartPhone(5);
MioTelefono1.ricarica(35);
console.log(MioTelefono1.numero404());
MioTelefono1.chiamata(15);
MioTelefono1.ricarica(7);
MioTelefono1.ricarica(10);
MioTelefono1.chiamata(4);
MioTelefono1.chiamata(7);
console.log(MioTelefono1.numero404());
console.log(MioTelefono1.getNumeroChiamate());
MioTelefono1.mostraRegistroChiamate();
console.log(MioTelefono1.filtraChiamatePerDataOra(new Date("2023/05/28")));
console.log(MioTelefono1.azzeraChiamate());
let MioTelefono2 = new SmartPhone(10);
MioTelefono2.ricarica(35);
console.log(MioTelefono2.numero404());
MioTelefono2.chiamata(15);
MioTelefono2.ricarica(7);
MioTelefono2.ricarica(10);
MioTelefono2.chiamata(4);
MioTelefono2.chiamata(7);
console.log(MioTelefono2.numero404());
console.log(MioTelefono2.getNumeroChiamate());
MioTelefono2.mostraRegistroChiamate();
console.log(MioTelefono2.azzeraChiamate());
console.log(MioTelefono2.filtraChiamatePerDataOra(new Date("2023/05/28")));
let MioTelefono3 = new SmartPhone(10);
MioTelefono3.ricarica(17);
console.log(MioTelefono3.numero404());
MioTelefono3.chiamata(14);
MioTelefono3.ricarica(7);
MioTelefono3.ricarica(10);
MioTelefono3.chiamata(2);
MioTelefono3.chiamata(1);
console.log(MioTelefono3.numero404());
console.log(MioTelefono3.getNumeroChiamate());
MioTelefono3.mostraRegistroChiamate();
console.log(MioTelefono3.azzeraChiamate());
console.log(MioTelefono3.filtraChiamatePerDataOra(new Date("2023/05/28")));
