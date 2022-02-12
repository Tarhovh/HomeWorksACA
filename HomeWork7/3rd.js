class Account {
    constructor(id, name, balance) {

        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id () {
        return this._id;
    }

    get name () {
        return this._name;
    }

    get balance () {
        return this._balance;
    }

    set name (value) {
        this._name = value;
    }

    set balance (value) {

        this._balance = value;

    }

    credit(amount) {
        this._balance = + amount + this._balance;
        return this._balance;
    }

    debit(amount) {
        if (amount < this._balance) {
            this._balance = + this._balance - amount;
            return this._balance;
        }

        console.warn("Amount exceeded balance.")
    }

    transferTo(anotherAccount, amount) {

        if (amount < this._balance) {
            this._balance = + this._balance - amount;
            anotherAccount += amount;
            console.log (`The another account's balance is $${anotherAccount}`);
            return `This account's new balance is $${this._balance}`;
        }

        else return `"Amount $${amount} exceeded balance of $${this._balance}."`
    }


    static identifyAccounts(accountFirst, accountSecond) {

        for (var key in accountFirst) {
            if (accountFirst.hasOwnProperty(key)) {
                if (!accountSecond.hasOwnProperty(key)) return "not the same";
                if (accountFirst[key] !== accountSecond[key]) return "not the same";
            }
        }
        for (var key in accountSecond) {
            if (accountSecond.hasOwnProperty(key)) {
                if (!accountFirst.hasOwnProperty(key)) return "not the same";
                if (accountFirst[key] !== accountSecond[key]) return "not the same";
            }
        }
        return "Two accounts have the same fields";
    }

    toString () {
        return `This account's id is ${this._id}, name is '${this._name}', balance is $${this._balance}`
    }

}

let account1 = new Account(55);

account1.name = "Big Company"
account1.balance = 5000
account1.credit(2500)
// account1.debit(7600)

console.log(account1.transferTo(0, 6500))

console.log(account1)


let account2 = new Account(55);

account2.name = "Big Company";
account2.balance = 5000
account2.credit(2500)
// account1.debit(7600)
account2.transferTo(0, 6500)

let account3 = new Account(65);
account3.name = "Small Company";
account3.balance = 2500;

console.log(Account.identifyAccounts(account1, account2))
console.log(Account.identifyAccounts(account1, account3))

console.log(account1.toString())


console.log ("-------End of 3rd-------")

