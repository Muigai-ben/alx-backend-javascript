const Currency = require('./3-currency.js');

class Pricing {
    constructor(amount, currency) {
        this._amount = typeof amount === 'number' ? amount : 0;
        this._currency = currency instanceof Currency ? currency : new Currency('', '');
    }

    // Getter and setter for amount attribute
    get amount() {
        return this._amount;
    }

    set amount(newAmount) {
        if (typeof newAmount === 'number') {
            this._amount = newAmount;
        } else {
            throw new TypeError('Amount must be a number');
        }
    }

    // Getter and setter for currency attribute
    get currency() {
        return this._currency;
    }

    set currency(newCurrency) {
        if (newCurrency instanceof Currency) {
            this._currency = newCurrency;
        } else {
            throw new TypeError('Currency must be an instance of Currency');
        }
    }

    // Method to display full price
    displayFullPrice() {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
        if (typeof amount === 'number' && typeof conversionRate === 'number') {
            return amount * conversionRate;
        } else {
            throw new TypeError('Amount and conversion rate must be numbers');
        }
    }
}

module.exports = Pricing;
