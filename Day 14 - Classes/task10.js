class Account {
    #balance;
    constructor(initialBallance) {
        this.#balance = initialBallance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
            console.log(`Deposited Amount: ${amount}. New balance: ${this.#balance}`);
        } else {
            console.log('Depost amount must be postive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
            console.log(`Withdrawn Amount: ${amount}. New balance: ${this.#balance}`)
        } else if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }
}

const a = new Account(1000)
a.deposit(500)
a.withdraw(1000)