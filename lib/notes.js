const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function writeDatabaseFile (notesArray) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArray, null, 2)
    );
    console.log('wrote', notesArray)
};

function createNewNote (newNote, notesArray) {
    newNote.id = uuidv4();
    notesArray.push(newNote);
    writeDatabaseFile(notesArray);
    console.log('create new file');
    return newNote;
};

function deleteOldNote (id, notesArray) {
    //search thru array for id
    const filteredNotesArray = notesArray.filter(note => {
        //remove from array 
        return note.id !== id;
    });
    writeDatabaseFile(filteredNotesArray);
    //and return
    return filteredNotesArray;
};

module.exports = { createNewNote, deleteOldNote };