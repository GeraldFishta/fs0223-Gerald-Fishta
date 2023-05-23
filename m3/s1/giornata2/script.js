var Account = /** @class */ (function () {
    function Account() {
        this.balance = 0;
    }
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    Account.prototype.withDraw = function (amount) {
        if (this.balance > amount) {
            this.balance -= amount;
        }
        else {
            console.log("Ti piacerebbe");
        }
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    return Account;
}());
var momAccount = /** @class */ (function () {
    function momAccount() {
        this.account = new Account;
    }
    momAccount.prototype.twoDeposit = function (amount) {
        this.account.deposit(amount);
    };
    momAccount.prototype.twoWithDraw = function (amount) {
        this.account.withDraw(amount);
    };
    momAccount.prototype.addInterest = function () {
        var interest = this.account.getBalance() * 0.1;
        this.account.deposit(interest);
    };
    momAccount.prototype.getBalance = function () {
        return this.account.balance;
    };
    return momAccount;
}());
var sonnyAccount = /** @class */ (function () {
    function sonnyAccount() {
        this.account = new Account;
    }
    sonnyAccount.prototype.oneDeposit = function (amount) {
        this.account.deposit(amount);
    };
    sonnyAccount.prototype.oneWithDraw = function (amount) {
        this.account.withDraw(amount);
    };
    sonnyAccount.prototype.getBalance = function () {
        return this.account.balance;
    };
    return sonnyAccount;
}());
var sonAccount = new sonnyAccount();
var motherAccount = new momAccount();
sonAccount.oneDeposit(280);
sonAccount.oneWithDraw(70);
sonAccount.oneWithDraw(70);
sonAccount.oneWithDraw(70);
motherAccount.twoDeposit(1500);
motherAccount.twoWithDraw(850);
motherAccount.addInterest();
console.log("saldo del figlio", sonAccount.getBalance());
console.log("saldo della madre", motherAccount.getBalance());
