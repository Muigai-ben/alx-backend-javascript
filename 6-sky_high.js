const Building = require('./5-building.js');

class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        super(sqft);
        this._floors = typeof floors === 'number' ? floors : 0;
    }

    // Getter for floors attribute
    get floors() {
        return this._floors;
    }

    // Override the evacuationWarningMessage method
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}

module.exports = SkyHighBuilding;
