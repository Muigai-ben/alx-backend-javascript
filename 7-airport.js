class Airport {
    constructor(name, code) {
        this._name = typeof name === 'string' ? name : '';
        this._code = typeof code === 'string' ? code : '';
    }

    // Getter and setter for name attribute
    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName === 'string') {
            this._name = newName;
        } else {
            throw new TypeError('Name must be a string');
        }
    }

    // Getter and setter for code attribute
    get code() {
        return this._code;
    }

    set code(newCode) {
        if (typeof newCode === 'string') {
            this._code = newCode;
        } else {
            throw new TypeError('Code must be a string');
        }
    }

    // Default string description of the class
    toString() {
        return this._code;
    }
}

module.exports = Airport;
