// Importing the ClassRoom class
import ClassRoom from './0-classroom.js';

// Function to initialize rooms
function initializeRooms() {
    // Creating an array of ClassRoom objects with the specified sizes
    const rooms = [
        new ClassRoom(19),
        new ClassRoom(20),
        new ClassRoom(34)
    ];
    return rooms;
}

// Exporting the initializeRooms function
export default initializeRooms;
