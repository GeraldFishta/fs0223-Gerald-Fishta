
class Account {
    balance: number;

    constructor(){
        this.balance = 0; 
    }

    deposit(amount: number) : void {
        this.balance += amount; 
    }

    withDraw(amount: number) : void {
        if(this.balance > amount) {
            this.balance -=  amount;
        } else {
            console.log ("Ti piacerebbe")
        }
    }

    getBalance() : number {
        return this.balance;
    }     
    }

class momAccount {
    account: Account;

    constructor() {
        this.account = new Account
    }
    twoDeposit( amount : number ) : void {
        this.account.deposit( amount );
    }
    twoWithDraw( amount: number ) : void {
        this.account.withDraw( amount );
    }
    addInterest () : void {
        let interest = this.account.getBalance() *0.1
        this.account.deposit(interest)
    }
    getBalance() : number{
        return this.account.balance
    }
}

class sonnyAccount {
    account: Account;

    constructor() {
        this.account = new Account
    }
    oneDeposit( amount : number ) : void {
        this.account.deposit( amount );
    }
    oneWithDraw( amount: number ) : void {
        this.account.withDraw( amount );
    }
    getBalance() : number{
        return this.account.balance
    }
}       

const sonAccount = new sonnyAccount();
const motherAccount  = new momAccount();

sonAccount.oneDeposit (280)
sonAccount.oneWithDraw (70)
sonAccount.oneWithDraw (70)
sonAccount.oneWithDraw (70)

motherAccount.twoDeposit (1500)
motherAccount.twoWithDraw (850)
motherAccount.addInterest ()

console.log ("saldo del figlio", sonAccount.getBalance())
console.log ("saldo della madre", motherAccount.getBalance())