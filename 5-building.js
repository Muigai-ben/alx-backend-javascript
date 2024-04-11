class Building {
    constructor(sqft) {
        this._sqft = typeof sqft === 'number' ? sqft : 0;
    }

    // Getter for sqft attribute
    get sqft() {
        return this._sqft;
    }

    // Abstract method to be implemented by subclasses
    evacuationWarningMessage() {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
}

module.exports = Building;
