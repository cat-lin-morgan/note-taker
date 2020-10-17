const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function createNewNote (newNote, notesArray) {
    newNote.id = uuidv4();
    notesArray.push(newNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({bd: notesArray}, null, 2)
    );
    return newNote;
}

module.exports = createNewNote;