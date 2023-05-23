"use strict";
class Account {
    constructor(balance) {
        this.balance = balance;
    }
    oneDeposit(amount) {
        this.balance += amount;
    }
    oneWithDraw(amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
        else {
            console.log("You're too poor");
        }
    }
    showBalance() {
        console.log(`Il tuo bilancio bancario e di ${this.balance}`);
    }
}
class MotherAccount extends Account {
    addInterest() {
        this.balance = this.balance * 1.1;
    }
}
let sonAccount = new Account(800);
sonAccount.oneWithDraw(40);
sonAccount.oneDeposit(200);
console.log(sonAccount.showBalance());
let motherAccount = new MotherAccount(2000);
motherAccount.oneDeposit(400);
motherAccount.addInterest();
console.log(motherAccount.showBalance());
