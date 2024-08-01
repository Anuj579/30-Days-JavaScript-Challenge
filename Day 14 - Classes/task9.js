// Activity 9: Private Fields - task9 to task10

class Account {
    #balance;
    constructor(initialBallance) {
        this.#balance = initialBallance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
        } else {
            console.log('Depost amount must be postive.');
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
        } else if (amount > this.#balance) {
            console.log('Insufficient funds.');
        } else {
            console.log('Withdrawal amount must be positive.');
        }
    }
}