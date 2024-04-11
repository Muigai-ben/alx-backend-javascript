class HolbertonCourse {
    constructor(name, length, students) {
        this._name = typeof name === 'string' ? name : '';
        this._length = typeof length === 'number' ? length : 0;
        this._students = Array.isArray(students) ? students : [];
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

    // Getter and setter for length attribute
    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength === 'number' && newLength > 0) {
            this._length = newLength;
        } else {
            throw new TypeError('Length must be a positive number');
        }
    }

    // Getter and setter for students attribute
    get students() {
        return this._students;
    }

    set students(newStudents) {
        if (Array.isArray(newStudents)) {
            this._students = newStudents;
        } else {
            throw new TypeError('Students must be an array');
        }
    }
}

module.exports = HolbertonCourse;
