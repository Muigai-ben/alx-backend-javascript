class HolbertonClass {
    constructor(size, location) {
        this._size = typeof size === 'number' ? size : 0;
        this._location = typeof location === 'string' ? location : '';
    }

    // Getter and setter for size attribute
    get size() {
        return this._size;
    }

    set size(newSize) {
        if (typeof newSize === 'number') {
            this._size = newSize;
        } else {
            throw new TypeError('Size must be a number');
        }
    }

    // Getter and setter for location attribute
    get location() {
        return this._location;
    }

    set location(newLocation) {
        if (typeof newLocation === 'string') {
            this._location = newLocation;
        } else {
            throw new TypeError('Location must be a string');
        }
    }

    // Casting to a Number returns the size
    valueOf() {
        return this._size;
    }

    // Casting to a String returns the location
    toString() {
        return this._location;
    }
}

module.exports = HolbertonClass;
