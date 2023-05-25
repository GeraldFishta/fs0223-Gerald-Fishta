let abbigliamentoNew:any [] = []

fetch("Abbigliamento.json")
    .then(response => {
        return response.json()
    })
    .then(data=> {
        data.forEach((element: Abbigliamento) => {
            abbigliamentoNew.push(new Abbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo))
        })    
        abbigliamentoNew[1].mostraPrezzo()
        console.log(abbigliamentoNew[0].mostraPrezzo())
        console.log(abbigliamentoNew[1].mostraPrezzo())
        console.log(abbigliamentoNew[2].mostraPrezzo())
        console.log(abbigliamentoNew[3].mostraPrezzo())
        console.log(abbigliamentoNew[4].mostraPrezzo())
    })
    .catch(error => {
       console.log(error)
    });

    console.log(abbigliamentoNew)

    class Abbigliamento {
        id:number; 
        codprod:number; 
        collezione:string;
        capo:string;
        modello:number; 
        quantita:number; 
        colore:string;
        prezzoivaesclusa:number; 
        prezzoivainclusa:number; 
        disponibile:string;
        saldo:number;

        constructor(id:number, codprod:number,collezione:string,capo:string,modello:number,quantita:number,colore:string,prezzoivaesclusa:number,prezzoivainclusa:number,disponibile:string,saldo:number) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello; 
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa; 
        this.disponibile = disponibile;
        this.saldo = saldo;
        }
        mostraPrezzo():string {return this.prezzoivainclusa + "$"}
    }

    