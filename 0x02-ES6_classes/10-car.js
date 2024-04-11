class Car {
    constructor(brand, motor, color) {
        this._brand = typeof brand === 'string' ? brand : '';
        this._motor = typeof motor === 'string' ? motor : '';
        this._color = typeof color === 'string' ? color : '';
    }

    // Getter and setter for brand attribute
    get brand() {
        return this._brand;
    }

    set brand(newBrand) {
        if (typeof newBrand === 'string') {
            this._brand = newBrand;
        } else {
            throw new TypeError('Brand must be a string');
        }
    }

    // Getter and setter for motor attribute
    get motor() {
        return this._motor;
    }

    set motor(newMotor) {
        if (typeof newMotor === 'string') {
            this._motor = newMotor;
        } else {
            throw new TypeError('Motor must be a string');
        }
    }

    // Getter and setter for color attribute
    get color() {
        return this._color;
    }

    set color(newColor) {
        if (typeof newColor === 'string') {
            this._color = newColor;
        } else {
            throw new TypeError('Color must be a string');
        }
    }

    // Method to clone a car
    cloneCar() {
        return new Car(this._brand, this._motor, this._color);
    }
}

module.exports = Car;
