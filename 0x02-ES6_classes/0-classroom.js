// ClassRoom.js

export default class ClassRoom {
    constructor(maxStudentsSize) {
        this._maxStudentsSize = typeof maxStudentsSize === 'number' ? maxStudentsSize : 0;
    }
}
