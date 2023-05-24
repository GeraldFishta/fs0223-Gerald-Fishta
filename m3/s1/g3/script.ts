abstract class redditoDiCittadinanzaAbs {
    codredd:number
    redditoannuolordo:number
    tasseInps?:number
    tasseIrpef?:number
    constructor(cod:number, redditoannuolordo:number, tasseinps?:number, tasseirpef?:number){
        this.codredd = cod
        this.redditoannuolordo = redditoannuolordo
        this.tasseInps = tasseinps
        this.tasseIrpef = tasseirpef
    }
    abstract getUtileTasse():number
    abstract getTasseInps():number
    abstract getTasseIrpef():number
    abstract getRedditoAnnuoNetto ():number
}

class redditoDiCittadinanza extends redditoDiCittadinanzaAbs {
    constructor(cod:number, redditoannuolordo:number, tasseInps?:number, tasseIrpef?:number){
        super (cod, redditoannuolordo, tasseInps, tasseIrpef )
    }
    getUtileTasse():number{
        if(this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo *0.23)
        } else if (this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000){
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo *0.25)
        } else if (this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000){
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo *0.35)
        } else {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo *0.43)
        } return this.redditoannuolordo     
    }
    getTasseInps():number {
        this.tasseInps = this.redditoannuolordo - (this.redditoannuolordo * 0.24)
        return this.tasseInps
    }
    getTasseIrpef():number {
        if (this.redditoannuolordo < 15000){
            this.redditoannuolordo = this.redditoannuolordo *0.23
        } else if (this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000){
            this.redditoannuolordo = this.redditoannuolordo *0.25
        } else if (this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000){
            this.redditoannuolordo = this.redditoannuolordo *0.35
        } else {
            this.redditoannuolordo = this.redditoannuolordo *0.43
        } return this.redditoannuolordo
    }
    getRedditoAnnuoNetto(): number {
        this.redditoannuolordo = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())
        return this.redditoannuolordo
    }
}

let Mario = new redditoDiCittadinanza(1255, 30000 )

console.log(Mario.getUtileTasse())