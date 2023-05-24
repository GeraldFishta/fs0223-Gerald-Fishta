"use strict";
class redditoDiCittadinanzaAbs {
    constructor(cod, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = cod;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseInps = tasseinps;
        this.tasseIrpef = tasseirpef;
    }
}
class redditoDiCittadinanza extends redditoDiCittadinanzaAbs {
    constructor(cod, redditoannuolordo, tasseInps, tasseIrpef) {
        super(cod, redditoannuolordo, tasseInps, tasseIrpef);
    }
    getUtileTasse() {
        if (this.redditoannuolordo < 15000) {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.23);
        }
        else if (this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000) {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.25);
        }
        else if (this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000) {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.35);
        }
        else {
            this.redditoannuolordo = this.redditoannuolordo - (this.redditoannuolordo * 0.43);
        }
        return this.redditoannuolordo;
    }
    getTasseInps() {
        this.tasseInps = this.redditoannuolordo - (this.redditoannuolordo * 0.24);
        return this.tasseInps;
    }
    getTasseIrpef() {
        if (this.redditoannuolordo < 15000) {
            this.redditoannuolordo = this.redditoannuolordo * 0.23;
        }
        else if (this.redditoannuolordo > 15001 && this.redditoannuolordo < 28000) {
            this.redditoannuolordo = this.redditoannuolordo * 0.25;
        }
        else if (this.redditoannuolordo > 28001 && this.redditoannuolordo < 50000) {
            this.redditoannuolordo = this.redditoannuolordo * 0.35;
        }
        else {
            this.redditoannuolordo = this.redditoannuolordo * 0.43;
        }
        return this.redditoannuolordo;
    }
    getRedditoAnnuoNetto() {
        this.redditoannuolordo = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return this.redditoannuolordo;
    }
}
let Mario = new redditoDiCittadinanza(1255, 30000);
console.log(Mario.getUtileTasse());
